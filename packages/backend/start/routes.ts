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

  return report.healthy ? response.ok(report) : response.badRequest(report)
})

Route
  .group(() => {
    Route
      .group(() => {
        Route.get('/one/:id', 'ReviewsController.one')
        Route.delete('/delete/:id', 'ReviewsController.delete')
        Route.post('/create', 'ReviewsController.create')
        Route.get('/list/:page', 'ReviewsController.list')
        Route.post('/update/:id', 'ReviewsController.update')
      })
      .prefix('reviews')

    Route
      .group(() => {
        Route.get('/one/:id', 'BannersController.one')
        Route.delete('/delete/:id', 'BannersController.delete')
        Route.post('/create', 'BannersController.create')
        Route.get('/list/:page', 'BannersController.list')
        Route.post('/update/:id', 'BannersController.update')
      })
      .prefix('banners')

    Route
      .group(() => {
        Route.get('/one/:id', 'MetroLinesController.one')
        Route.delete('/delete/:id', 'MetroLinesController.delete')
        Route.post('/create', 'MetroLinesController.create')
        Route.get('/list/:page', 'MetroLinesController.list')
        Route.post('/update/:id', 'MetroLinesController.update')
        Route.post('/many', 'MetroLinesController.many')
      })
      .prefix('metro-lines')

    Route
      .group(() => {
        Route.get('/one/:id', 'MetroStationsController.one')
        Route.delete('/delete/:id', 'MetroStationsController.delete')
        Route.post('/create', 'MetroStationsController.create')
        Route.get('/list/:page', 'MetroStationsController.list')
        Route.post('/update/:id', 'MetroStationsController.update')
      })
      .prefix('metro-stations')

    Route
      .group(() => {
        Route.get('/one/:id', 'OrdersController.one')
        Route.delete('/delete/:id', 'OrdersController.delete')
        Route.post('/create', 'OrdersController.create')
        Route.get('/list/:page', 'OrdersController.list')
      })
      .prefix('orders')

    Route
      .group(() => {
        Route.get('/one/:id', 'SleepingPlacesController.one')
        Route.delete('/delete/:id', 'SleepingPlacesController.delete')
        Route.post('/create', 'SleepingPlacesController.create')
        Route.get('/list/:page', 'SleepingPlacesController.list')
        Route.post('/update/:id', 'SleepingPlacesController.update')
      })
      .prefix('sleeping-places')

    Route
      .group(() => {
        Route.get('/one/:id', 'AccommodationsController.one')
        Route.delete('/delete/:id', 'AccommodationsController.delete')
        Route.post('/create', 'AccommodationsController.create')
        Route.get('/list/:page', 'AccommodationsController.list')
        Route.post('/update/:id', 'AccommodationsController.update')
      })
      .prefix('accommodations')

    Route
      .group(() => {
        Route.post('/create', 'PhotosController.create')
        Route.get('/one/:id', 'PhotosController.one')
        Route.get('/list/:page', 'PhotosController.list')
        Route.delete('/delete/:id', 'PhotosController.delete')
      })
      .prefix('photos')

    Route
      .group(() => {
        Route.delete('/delete/:id', 'ApartmentsController.delete')
        Route.post('/create', 'ApartmentsController.create')
        Route.post('/many', 'ApartmentsController.many')
        Route.post('/update/:id', 'ApartmentsController.update')
      })
      .prefix('apartments')
  })
  .prefix('/api/v1').middleware('apiAuth')

Route
  .group(() => {
    Route
      .group(() => {
        Route.get('/one/:id', 'ApartmentsController.one')
        Route.get('/list/:page', 'ApartmentsController.list')
      })
      .prefix('apartments')
  })
  .prefix('/api/v1')

Route
  .group(() => {
    Route.post('/login', 'AuthController.login')
    Route.post('/refresh', 'AuthController.refresh')
    Route.post('/logout', 'AuthController.logout')
  })
  .prefix('/api/v1/auth')
