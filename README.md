# Todo
- Add commit message standard (see cz-conventional-changelog)
- Add Swagger
- Add https://www.npmjs.com/package/lint-staged
- Add React Storybook
- Add https://www.npmjs.com/package/source-map-explorer
- Add artillery for stress tests (https://artillery.io/)

# Install
1. Установка
- Склонировать репозиторий. Переключиться на ветку develop
- Установить версию node: ^16 или volta (https://docs.volta.sh/guide/getting-started)
- ``npm i``
- ``npm i -g lerna`` (если не было установлено ранее)
- ``lerna bootstrap``
2. В директории ``packages/backend`` cоздать .env файл, согласно примеру (.env.example). Вбить свои пароли
3. Поднять БД через Docker (в папке packages/backend): ``docker-compose up -d``

# Запуск Приложения
- Запустить админку: ``npm run start:admin``
- Запустить бэк: ``npm run start:backend``
- Запустить фронт: ``npm run start:frontend``

# Плагины VSCode
- EditorConfig https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
- ESLint https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
- Stylelint https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint
