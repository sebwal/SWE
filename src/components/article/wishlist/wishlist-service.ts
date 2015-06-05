/// <reference path="../../../_all.ts" />

module Article{
	'use strict';
	
	export class WishlistService{		
		
		private entries: Article[];
		 
		constructor(){
			this.entries = [];
		} 
		
		public addArticle(article: Article){
			this.entries.push(article);
console.log("debug add service");
			alert("Artikel wurde dem Wunschzettel hinzugefügt");
		}
		
		public getAllEntries(): Array<Article>{
			console.log("get");
			return this.entries;
		}
	}
	
	var app = angular.module('shop');
	app.service('WishlistService', WishlistService);
}