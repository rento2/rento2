import { BaseCommand } from '@adonisjs/core/build/standalone'
import execa from 'execa'

export default class UserDatabaseReset extends BaseCommand {
  public static commandName = 'db:reset'
  public static description = 'Drop all tables and execute seeders in new database (db:wipe + migration:run + db:seed)'

  public static settings = {
    loadApp: false,
    stayAlive: false,
  }

  public async run (): Promise<void> {
    this.logger.warning('This action will destroy the data in the database!')
    await this.prompt.confirm('Are you sure?')

    const spinner = this.logger.await('Drop all tables, views and types in database')
    await execa.node('ace', ['db:wipe'])
    spinner.stop()

    const spinner1 = this.logger.await('Migrate database by running pending migrations')
    await execa.node('ace', ['migration:run'])
    spinner1.stop()

    const spinner3 = this.logger.await('Execute database seeders')
    await execa.node('ace', ['db:seed'])
    spinner3.stop()

    this.logger.success('Created a new database!')
  }
}
