/*
|--------------------------------------------------------------------------
| Validating Environment Variables
|--------------------------------------------------------------------------
|
| In this file we define the rules for validating environment variables.
| By performing validation we ensure that your application is running in
| a stable environment with correct configuration values.
|
| This file is read automatically by the framework during the boot lifecycle
| and hence do not rename or move this file to a different location.
|
*/

import Env from '@ioc:Adonis/Core/Env'

export default Env.rules({
  HOST: Env.schema.string({ format: 'host' }),
  PORT: Env.schema.number(),
  APP_KEY: Env.schema.string(),
  APP_NAME: Env.schema.string(),
  DRIVE_DISK: Env.schema.enum(['local', 's3'] as const),
  NODE_ENV: Env.schema.enum(['development', 'production', 'testing'] as const),

  DB_CONNECTION: Env.schema.string(),
  POSTGRES_HOST: Env.schema.string({ format: 'host' }),
  POSTGRES_PORT: Env.schema.number(),
  POSTGRES_USER: Env.schema.string(),
  POSTGRES_PASSWORD: Env.schema.string(),
  POSTGRES_DB: Env.schema.string(),

  S3_KEY: Env.schema.string(),
  S3_SECRET: Env.schema.string(),
  S3_BUCKET: Env.schema.string(),
  S3_REGION: Env.schema.string(),
  S3_ENDPOINT: Env.schema.string.optional(),

  TELEGRAM_BOT_TOKEN: Env.schema.string(),
  TELEGRAM_CHAT_ID: Env.schema.number(),
})
