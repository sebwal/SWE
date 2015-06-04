/// <reference path="../../../_all.ts" />

module Article{
	'use strict';
	
	export class ShoppingCartController{
		private entries: ShoppingCartEntry[];
		shoppingCartService: ShoppingCartService;
		orderService: Order.OrderService;
		blub: boolean;
		
		static $inject = ['$scope', 'ShoppingCartService', 'OrderService'];		
		constructor($scope: ShoppingCartController, shoppingCartService: ShoppingCartService, orderService: Order.OrderService){
			$scope.entries = shoppingCartService.getAllEntries();						
			this.shoppingCartService = shoppingCartService;
			this.blub = true;
			this.orderService = orderService;
		}
		
		public getAllEtries(): Array<ShoppingCartEntry>{
			console.log(this.entries);
			return this.entries;
		}
		
		public loadMock(){
			this.shoppingCartService.addMock();
			this.entries = this.shoppingCartService.getAllEntries();
			this.blub = false;
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