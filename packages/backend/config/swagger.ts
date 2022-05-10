import { SwaggerConfig } from '@ioc:Adonis/Addons/Swagger'

// eslint-disable-next-line
export default {
  uiEnabled: true, // disable or enable swaggerUi route
  uiUrl: 'docs', // url path to swaggerUI
  specEnabled: true, // disable or enable swagger.json route
  specUrl: '/swagger.json',

  middleware: [], // middlewares array, to protect your swagger docs and spec endpoints

  options: {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'API Rento',
        version: '1.0.0',
        description: 'API Rento swagger docs'
      },
      components: {
        securitySchemes: {
          bearerAuth: {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT'
          }
        }
      }
    },

    apis: [
      'app/**/*.ts',
      'docs/swagger/**/*.yml',
      'docs/swagger/*.yml',
      'start/routes.ts'
    ],
    basePath: '/api/v1/'
  },
  mode: process.env['NODE_ENV'] === 'production' ? 'PRODUCTION' : 'RUNTIME',
  specFilePath: 'docs/swagger.json'
} as SwaggerConfig
