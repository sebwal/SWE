/// <reference path="../../../_all.ts" />

module Article{
	'use strict';
	
	export class ShoppingCartService{		
		
		//Hier stehen die Artikel vom Warenkorb drin
		private entries: ShoppingCartEntry[];
		 
		constructor(){
			this.entries = [];
		} 
		
		public addArticle(article: Article, amount: number){
			for(var i = 0; i < this.entries.length; i++){
				if(this.entries[i].article.name === article.name){
					this.entries[i].amount += amount;
		
					alert("Artikel wurde dem Warenkorb hinzugefügt");
					return;
				}
			}
			//Neuer Warenkorb Eintrag erzeugen
			this.entries.push(new ShoppingCartEntry(article, amount));

			alert("Artikel wurde dem Warenkorb hinzugefügt");
		}
		
		public getAllEntries(): Array<ShoppingCartEntry>{
			return this.entries;
		}
	}
	
	var app = angular.module('shop');
	app.service('ShoppingCartService', ShoppingCartService);
}