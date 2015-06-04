/// <reference path="../../../_all.ts" />

module Article{
	'use strict';
	
	export class ShoppingCartService{		
		
		private entries: ShoppingCartEntry[];
		 
		constructor(){
			this.entries = [];
		} 
		
	 	public addMock(){
		 	this.entries = [];
 			var articles = new Array<Article>();
			articles.push(new Article(1, "regalA", Category.bedroom, 200, "subba regal!"));
			articles.push(new Article(2, "regalB", Category.bedroom, 400, "top regal!!"));
			articles.push(new Article(3, "regalC", Category.bedroom, 500, "hammer regal!!!"));
			
			for(var i = 0; i < articles.length; i++){
				articles[i].imageUri = "./img/example" + (i + 1) + ".jpg";
				this.addArticle(articles[i], i+1);
			}
		}
		 
		public addArticle(article: Article, amount: number){
			for(var i = 0; i < this.entries.length; i++){
				if(this.entries[i].article.id == article.id){
					this.entries[i].amount += amount;
					return;
				}
			}
			this.entries.push(new ShoppingCartEntry(article, amount));
		}
		
		public getAllEntries(): Array<ShoppingCartEntry>{
			return this.entries;
		}
	}
	
	var app = angular.module('shop');
	app.service('ShoppingCartService', ShoppingCartService);
}