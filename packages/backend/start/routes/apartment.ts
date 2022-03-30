import Route from '@ioc:Adonis/Core/Route'

Route.resource('api/v1/apartments', 'ApartmentsController').apiOnly()
