import Route from '@ioc:Adonis/Core/Route'

Route.resource('accommodations', 'AccommodationsController').apiOnly()
