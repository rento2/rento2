import Env from '@ioc:Adonis/Core/Env'

export default {
  username: Env.get('BNOVO_USERNAME'),
  password: Env.get('BNOVO_PASSWORD'),
  accountId: Env.get('BNOVO_ACCOUNT_ID'),
  planId: Env.get('BNOVO_PLAN_ID'),
  privateUrl: Env.get('BNOVO_PRIVATE_URL'),
}
