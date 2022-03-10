import Route from '@ioc:Adonis/Core/Route'

Route.resource('apartments', 'ApartmentsController').apiOnly()
