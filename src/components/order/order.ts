/// <reference path="../../_all.ts" />

module Order{
	'use strict';
	
	export class Order{
		private static globalId: number;
		private id: number;
		private date: Date;
		private overAllPrice: number;
		private orderItems: Array<OrderItem>;
		
		constructor(orderItems: Array<OrderItem>){
			this.overAllPrice = 0;
			for(var i = 0; i < this.orderItems.length; i++){
				this.overAllPrice += this.orderItems[i].amount * this.orderItems[i].article.price;
			}
			
			this.orderItems = orderItems;
			this.id = Order.globalId++;
		}
	}
}