/// <reference path="../../../_all.ts" />

module Article{
	'use strict';
	
	export class WishlistController{
		private entries: Article[];
		shoppingCartService: ShoppingCartService;
		
		static $inject = ['ShoppingCartService', 'WishlistService'];		
		constructor(shoppingCartService: ShoppingCartService, wishlistService: WishlistService){
			console.log("debug ctrl");
			this.entries = wishlistService.getAllEntries();						
			this.shoppingCartService = shoppingCartService;
		}
		
		public getAllEntries(): Array<Article>{
			return this.entries;
		}
		
		public addEntryToShoppingCart(entry: Article){
			this.shoppingCartService.addArticle(entry, 1);
		}
	}
	
	angular.module('shop')
	.controller('WishlistController', WishlistController);
}