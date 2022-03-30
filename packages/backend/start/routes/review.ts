import Route from '@ioc:Adonis/Core/Route'

Route
  .group(() => {
    Route.get('/one/:id', 'ReviewsController.one')
    Route.delete('/delete/:id', 'ReviewsController.delete')
    Route.post('/create', 'ReviewsController.create')
    Route.get('/list', 'ReviewsController.list')
  })
  .prefix('api/v1/reviews')
