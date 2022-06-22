import { SwaggerConfig } from '@ioc:Adonis/Addons/Swagger'

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  uiEnabled: true, // disable or enable swaggerUi route
  uiUrl: 'docs-short-modal-rules', // url path to swaggerUI
  specEnabled: true, // disable or enable swagger.json route
  specUrl: '/swagger.json',

  middleware: [], // middlewares array, to protect your swagger docs-short-modal-rules and spec endpoints

  options: {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'API Rento',
        version: '1.0.0',
        description: 'API Rento swagger docs-short-modal-rules'
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
      'docs-short-modal-rules/swagger/**/*.yml',
      'docs-short-modal-rules/swagger/*.yml',
      'start/routes.ts'
    ],
    basePath: '/api/v1/'
  },
  mode: process.env['NODE_ENV'] === 'production' ? 'PRODUCTION' : 'RUNTIME',
  specFilePath: 'docs-short-modal-rules/swagger.json'
} as SwaggerConfig
