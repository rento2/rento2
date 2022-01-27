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
- Установить volta https://docs.volta.sh/guide/getting-started
- ``npm i``
- ``npm i -g lerna`` (если не было установлено ранее)
- ``lerna bootstrap``
2. Создать .env файл, согласно примеру. Вбить свои пароли
3. Поднять БД через Docker (в папке packages/backend): ``docker-compose up -d``

# Запуск Приложения
- Запустить бэкенд, фронт, админку: ``cd packages/backend && npm run dev && cd ../admin && npm start && cd ../frontend && npm run dev``
- Запустить фронт: ``cd packages/frontend && npm run dev``

# Плагины VSCode
- EditorConfig https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
- ESLint https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
- Stylelint https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint
