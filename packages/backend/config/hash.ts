/**
 * Config source: https://git.io/JfefW
 *
 * Feel free to let us know via PR, if you find something broken in this config
 * file.
 */

import Env from '@ioc:Adonis/Core/Env'
import { HashConfig } from '@ioc:Adonis/Core/Hash'

/*
|--------------------------------------------------------------------------
| Hash Config
|--------------------------------------------------------------------------
|
| The `HashConfig` relies on the `HashList` interface which is
| defined inside `contracts` directory.
|
*/
const hashConfig: HashConfig = {
  /*
  |--------------------------------------------------------------------------
  | Default hasher
  |--------------------------------------------------------------------------
  |
  | By default we make use of the bcrypt hasher to hash values. However, feel
  | free to change the default value
  |
  */
  default: Env.get('HASH_DRIVER', 'bcrypt'),

  list: {
    argon: {
      driver: 'argon2',
      variant: 'id',
      iterations: 3,
      memory: 4096,
      parallelism: 1,
      saltSize: 16
    },

    bcrypt: {
      driver: 'bcrypt',
      rounds: 12
    }
  }
}

export default hashConfig
