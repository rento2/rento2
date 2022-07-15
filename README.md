# System requirements
- Node.js version =16
- Docker
 
# Install
1. Установка
- ``git clone git@github.com:rento2/rento2.git``
- ``npm i``
2. В директории ``packages/backend`` cоздать файл .env: ``cp .env.example .env``
3. В директории ``packages/frontend`` cоздать файл .env.local: ``cp .env.example .env.local``
4. Поднять БД через Docker: ``npm run dc:up``

# Запуск Приложения
- Запустить админку: ``npm run start:admin``
- Запустить бэк: ``npm run start:backend``
- Запустить фронт: ``npm run start:frontend``
- Запустить swagger: ``npm run start:swagger``, залогиниться в AUTH (значения по умолчанию можно не менять) и вставить полученный токен (зелёная кнопка Authorize).

# Особенности монорепозитория
- Если несколько проектов имеют зависимости одинаковой версии, то она находится в корневых node_modules.  
Если версии разные, то в node_modules каждого проекта

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
