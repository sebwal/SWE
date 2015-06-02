/// <reference path="../../../_all.ts" />

module Article{
	'use strict';
	
	export class ShoppingCartService{
		
		private entries: ShoppingCartEntry[];
		 
		public addArticle(article: Article, amount: number){
			for(var i = 0; i < this.entries.length; i++){
				if(this.entries[i].article.id == article.id){
					this.entries[i].amount += amount;
					return;
				}
			}
			this.entries.push(new ShoppingCartEntry(article, amount));
		}
	}
	
	var app = angular.module('shop');
	app.service('ShoppingCartService', ShoppingCartService);
}