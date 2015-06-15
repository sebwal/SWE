/// <reference path="../../../_all.ts" />

module Article{
	'use strict';
	
	export class WishlistController{
		private entries: Article[];
		
		static $inject = ['ShoppingCartService', 'WishlistService'];		
		constructor(private shoppingCartService: ShoppingCartService, private wishlistService: WishlistService){
			this.entries = wishlistService.getAllEntries();						
			this.shoppingCartService = shoppingCartService;
		}
		
		public getAllEntries(): Array<Article>{
			return this.entries;
		}
		
		public addEntryToShoppingCart(entry: Article){
			this.shoppingCartService.addArticle(entry, 1);
			this.wishlistService.removeArticle(entry);
			this.entries = this.wishlistService.getAllEntries();
		}
	}
	
	angular.module('shop')
	.controller('WishlistController', WishlistController);
}