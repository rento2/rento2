import Env from '@ioc:Adonis/Core/Env'

export default {
  telegram_bot_token: Env.get('TELEGRAM_BOT_TOKEN', ''),
  telegram_chat_id: Env.get('TELEGRAM_CHAT_ID', ''),
}
