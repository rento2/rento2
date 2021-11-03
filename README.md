# Todo
- Add commit message standard (see cz-conventional-changelog)
- Add Swagger
- Add https://www.npmjs.com/package/lint-staged
- Add React Storybook
- Add https://www.npmjs.com/package/source-map-explorer
- Add artillery for stress tests (https://artillery.io/)

# Intall
1. Установка
- ``npm i``
- ``npm i -g lerna`` (если не было установлено ранее)
- ``lerna bootstrap``
2. Создать .env файл, согласно примеру. Вбить свои пароли
3. Поднять БД через Docker (в папке packages/backend): ``docker-compose up -d``

# Запуск Приложения
- Запустить бэкенд, фронт, админку: ``cd packages/backend && npm run dev && cd ../admin && npm start && cd ../frontend && npm run dev``
- Запустить фронт: ``cd packages/frontend && npm run dev``
