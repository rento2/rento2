# System requirements
- Node.js version =16
- Docker
 
# Install
1. Установка
- ``git clone git@github.com:rento2/rento2.git && cd rento2``
- ``npm run bootstrap``
2. В директории ``packages/backend`` создать файл .env: ``cp .env.example .env``
3. В директории ``packages/frontend`` создать файл .env.local: ``cp .env.example .env.local``
4. Поднять БД через Docker: ``npm run dc:up``
5. Заполнить БД таблицами и данными: ``npm run db:reset``

# Запуск Приложения
- Запустить админку: ``npm run start:admin``
- Запустить бэк: ``npm run start:backend``
- Запустить фронт: ``npm run start:admin``
- Запустить swagger:
  - ``cd ./packages/backend && npm run start:swagger``
  - Залогиниться в AUTH (значения по умолчанию можно не менять) и вставить полученный токен (зелёная кнопка Authorize).

# Особенности монорепозитория
- Каждый субпроект имеет свои зависимости, они устанавливаются отдельно в папке каждого субпроекта, в корне нет prod зависимостей, только dev, связанные с работой монорепозитория

# Дополнительная информация
- Файлы шрифтов получаем по запросу (необходимы для работы на фронте)

# Запуск миграций и сидеров
- В директории ``packages/backend`` запустить команды:
  - ``node ace migration:run``
  - ``node ace db:seed``
- ``npm run db:reset`` - вспомогательная команда, которая удаляет БД и запускает миграции и сидеры с нуля

# Todo
- Add commit message standard (see cz-conventional-changelog)
- Add https://www.npmjs.com/package/lint-staged
- Add React Storybook
- Add https://www.npmjs.com/package/source-map-explorer
- Add artillery for stress tests (https://artillery.io/)
- Актуализировать Swagger
