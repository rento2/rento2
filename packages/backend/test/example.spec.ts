import test from 'japa'
import supertest from 'supertest'
import Database from '@ioc:Adonis/Lucid/Database'
import Env from '@ioc:Adonis/Core/Env'

const BASE_URL = `http://${Env.get('HOST')}:${Env.get('PORT')}`

test.group('Main', (group) => {
  group.beforeEach(async () => {
    await Database.beginGlobalTransaction()
  })

  group.afterEach(async () => {
    await Database.rollbackGlobalTransaction()
  })

  test('ensure app is healthy', async (assert) => {
    const { body } = await supertest(BASE_URL).get('/health')

    assert.isObject(body)
    assert.isTrue(body.healthy)
  })
})
