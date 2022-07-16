# System requirements
- Node.js version =16
- Docker
 
# Install
1. Установка
- ``git clone git@github.com:rento2/rento2.git && cd rento2``
- ``npm i`` в директории каждого пакета и в корне(``./rento``), packages/backend|frontend|admin
2. В директории ``packages/backend`` cоздать файл .env: ``cp .env.example .env``
3. В директории ``packages/frontend`` cоздать файл .env.local: ``cp .env.example .env.local``
4. Поднять БД через Docker: ``npm run dc:up``

# Запуск Приложения
- Запустить админку: ``cd ./packages/admin && npm run start``
- Запустить бэк: ``cd ./packages/backend && npm run start`
- Запустить фронт: ``cd ./packages/frontend && npm run start`
- Запустить swagger: ``cd ./packages/backend && npm run start:swagger`, залогиниться в AUTH (значения по умолчанию можно не менять) и вставить полученный токен (зелёная кнопка Authorize).

# Особенности монорепозитория
- Каждый субпроект имеет свои зависимости, они устанавливаются отдельно в папке каждого субпроекта, в корне нет продовых зависимостей, только dev - на данный момент это husky, возможно, в будущем будут добавлены еще пакеты.

# Дополнительная информация
- Файлы шрифтов получаем по запросу (необходимы для работы на фронте)

# Запуск миграций
В директории ``packages/backend`` запустить команды:
- ``node ace migration:run``
- ``node ace db:seed``

# Удалить БД и создать с нуля
- ``npm run db:reset``

# Todo
- Add commit message standard (see cz-conventional-changelog)
- Add https://www.npmjs.com/package/lint-staged
- Add React Storybook
- Add https://www.npmjs.com/package/source-map-explorer
- Add artillery for stress tests (https://artillery.io/)
