/// <reference path="../../../_all.ts" />

module Article{
	'use strict';
	
	export class ShoppingCartController{
		private entries: ShoppingCartEntry[];
		
		static $inject = ['ShoppingCartService', 'OrderService'];		
		constructor(private shoppingCartService: ShoppingCartService, private orderService: Order.OrderService){
			
			//Hole Warenkorb-Einträge
			this.entries = shoppingCartService.getAllEntries();						
			this.shoppingCartService = shoppingCartService;
			this.orderService = orderService;
		}
		
		public getAllEntries(): Array<ShoppingCartEntry>{
			return this.entries;
		}
		
		public increaseAmount(entry: ShoppingCartEntry){
			entry.amount++;
		}

		public decreaseAmount(entry: ShoppingCartEntry){
			if(entry.amount === 1){
				this.entries.splice(this.entries.indexOf(entry), 1);
			}
			entry.amount--;
		}
		
		public orderAllEntries(){
			var orderItems = new Array<Order.OrderItem>();
			for(var i = 0; i < this.entries.length; i++){
				orderItems.push(new Order.OrderItem(this.entries[i].article, this.entries[i].amount));
			}
			
			this.orderService.createOrder(orderItems);
		}
	}
	
	angular.module('shop')
	.controller('ShoppingCartController', ShoppingCartController);
}