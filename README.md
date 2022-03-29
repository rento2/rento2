# System requirements
- Node.js version >=16
- Docker

# Install
1. Установка
- Склонировать репозиторий (основная ветка для разработки: develop)
- ``npm i``
- ``npm i -g lerna`` (если не было установлено ранее)
- ``lerna bootstrap``
2. В директории ``packages/backend`` cоздать .env файл, согласно примеру (.env.example). Вбить свои пароли
3. Поднять БД через Docker (в папке packages/backend): ``docker-compose up -d``

# Запуск Приложения
- Запустить админку: ``npm run start:admin``
- Запустить бэк: ``npm run start:backend``
- Запустить фронт: ``npm run start:frontend``

# Особенности монорепозитория
- При добавлении в один из проектов зависимости необходимо сделать ``lerna bootstrap``
- При добавлении зависимости в корень проекта необходимо делать ``npm i`` (это может привести к whitespace изменениям в package-lock проектов, их можно отменить)

# Рекомендуемые плагины VSCode
- EditorConfig https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
- ESLint https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
- Stylelint https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint

# Дополнительная информация
- Файлы шрифтов получаем по запросу (необходимы для работы на фронте)

# Запуск миграций
В директории ``packages/backend`` запустить команды:
- ``node ace migration:run``
- ``node ace db:seed``

# Todo
- Add commit message standard (see cz-conventional-changelog)
- Add Swagger
- Add https://www.npmjs.com/package/lint-staged
- Add React Storybook
- Add https://www.npmjs.com/package/source-map-explorer
- Add artillery for stress tests (https://artillery.io/)
- Dedupe monorepo packages
