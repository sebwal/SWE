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
			alert("Artikel wurde dem Wunschzettel hinzugefügt");
		}
		
		public getAllEntries(): Array<Article>{
			return this.entries;
		}
		
		public removeArticle(article: Article){
			for(var i = 0; i < this.entries.length; i++){
				if(this.entries[i] === article){
					this.entries.splice(i, 1);
				}
			}
		}
	}
	
	var app = angular.module('shop');
	app.service('WishlistService', WishlistService);
}