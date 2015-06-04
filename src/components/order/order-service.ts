/// <reference path="../../_all.ts" />

module Order{
	'use strict';
	
	export class OrderService{
		private orders: Array<Order>;	
		private orderUri = "http://localhost:8443/shop/rest/bestellungen"; //localhost might have to be exchanged with ip if wildfly is running in VM

		getAllOrders(): Order[]{
			var orders;
			$.getJSON(this.orderUri, ord => {orders = ord;});
	 		return orders;
		}
		
		public createOrder(orderItems: Array<OrderItem>){
			this.orders.push(new Order(orderItems));
		}
	}
	
	var app = angular.module('shop');
	app.service('OrderService', OrderService);
}