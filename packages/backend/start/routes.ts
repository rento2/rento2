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
  return `
  <form action="/photo" method="post" enctype="multipart/form-data">
      <div class="form">
        <label>Apartment id</label>
        <input name="apartment_id"></input>
        <label>Upload</label><input type="file" name="image">
      </div>
    <button type="submit">Submit</button>
  </form>`
})

Route.resource('photo', 'PhotosController').apiOnly()

Route.get('/health', async ({ response }) => {
  const report = await HealthCheck.getReport()

  return report.healthy ? response.ok(report) : response.badRequest(report)
})

Route.group(() => {
  Route.group(() => {
    Route.get('/one/:id', 'ReviewsController.one')
    Route.delete('/delete/:id', 'ReviewsController.delete')
    Route.post('/create', 'ReviewsController.create')
    Route.get('/list', 'ReviewsController.list')
    Route.post('/update', 'ReviewsController.update')
  }).prefix('reviews')

  Route.resource('/apartments', 'ApartmentsController').apiOnly()
}).prefix('/api/v1')
