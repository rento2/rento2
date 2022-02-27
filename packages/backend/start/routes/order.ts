import Route from '@ioc:Adonis/Core/Route'

Route.resource('orders', 'OrdersController').apiOnly()
