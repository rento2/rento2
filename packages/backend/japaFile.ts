import 'reflect-metadata'
import execa from 'execa'
import { join } from 'path'
import getPort from 'get-port'
import { configure } from 'japa'
import sourceMapSupport from 'source-map-support'

process.env['NODE_ENV'] = 'testing'
process.env['ADONIS_ACE_CWD'] = join(__dirname)
sourceMapSupport.install({ handleUncaughtExceptions: false })

async function startHttpServer (): Promise<void> {
  const { Ignitor } = await import('@adonisjs/core/build/src/Ignitor')
  process.env['PORT'] = String(await getPort())
  await new Ignitor(__dirname).httpServer().start()
}

async function runMigrations (): Promise<void> {
  await execa.node('ace', ['migration:run'], {
    stdio: 'inherit'
  })
}

async function rollbackMigrations (): Promise<void> {
  await execa.node('ace', ['migration:rollback', '--batch=0'], {
    stdio: 'inherit'
  })
}

configure({
  files: ['test/**/*.spec.ts'],
  before: [
    runMigrations,
    startHttpServer
  ],
  after: [rollbackMigrations]
})
