/**
 * Config source: https://git.io/JesV9
 *
 * Feel free to let us know via PR, if you find something broken in this config
 * file.
 */

import Env from '@ioc:Adonis/Core/Env'
import { DatabaseConfig } from '@ioc:Adonis/Lucid/Database'

const databaseConfig: DatabaseConfig = {
  /*
  |--------------------------------------------------------------------------
  | Connection
  |--------------------------------------------------------------------------
  |
  | The primary connection for making database queries across the application
  | You can use any key from the `connections` object defined in this same
  | file.
  |
  */
  connection: Env.get('DB_CONNECTION'),

  connections: {
    /*
    |--------------------------------------------------------------------------
    | Postgres config
    |--------------------------------------------------------------------------
    |
    | Configuration for Postgres database. Make sure to install the driver
    | from npm when using this connection
    |
    | npm i pg
    |
    */
    postgres: {
      client: 'postgres',
      connection: {
        host: Env.get('POSTGRES_HOST'),
        port: Env.get('POSTGRES_PORT'),
        user: Env.get('POSTGRES_USER'),
        password: Env.get('POSTGRES_PASSWORD'),
        database: Env.get('POSTGRES_DB')
      },
      migrations: {
        naturalSort: true
      },
      healthCheck: true,
      debug: false
    }

  }
}

export default databaseConfig
