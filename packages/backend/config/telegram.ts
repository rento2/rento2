import Env from '@ioc:Adonis/Core/Env'

export default {
  token: Env.get('TELEGRAM_TOKEN'),
  chat_id: Env.get('TELEGRAM_CHAT_ID'),
  test_token: Env.get('TEST_TELEGRAM_TOKEN'),
  test_chat_id: Env.get('TEST_TELEGRAM_CHAT_ID'),
}
