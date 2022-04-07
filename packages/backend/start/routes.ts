/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'
import HealthCheck from '@ioc:Adonis/Core/HealthCheck'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.get('/health', async ({ response }) => {
  const report = await HealthCheck.getReport()

  return report.healthy
    ? response.ok(report)
    : response.badRequest(report)
})

Route
  .group(() => {
    Route
      .group(() => {
        Route.get('/one/:id', 'ReviewsController.one')
        Route.delete('/delete/:id', 'ReviewsController.delete')
        Route.post('/create', 'ReviewsController.create')
        Route.get('/list', 'ReviewsController.list')
        Route.post('/update', 'ReviewsController.update')
      })
      .prefix('reviews')

    Route
      .group(() => {
        Route.get('/one/:id', 'BannersController.one')
        Route.delete('/delete/:id', 'BannersController.delete')
        Route.post('/create', 'BannersController.create')
        Route.get('/list', 'BannersController.list')
        Route.post('/update', 'BannersController.update')
      })
      .prefix('banners')

    Route
      .group(() => {
        Route.get('/one/:id', 'OrdersController.one')
        Route.delete('/delete/:id', 'OrdersController.delete')
        Route.post('/create', 'OrdersController.create')
        Route.get('/list', 'OrdersController.list')
        Route.post('/update', 'OrdersController.update')
      })
      .prefix('orders')

    Route.resource('/apartments', 'ApartmentsController').apiOnly()
  })
  .prefix('/api/v1')
