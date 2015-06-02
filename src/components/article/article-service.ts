/// <reference path="../../_all.ts" />

module Article{
	'use strict';
	
	export class ArticleService{
				
		private articleUri = "http://localhost:8443/shop/rest/artikel"; //localhost might have to be exchanged with ip if wildfly is running in VM
		getAllArticles(): Article[]{
			var articles;
			$.getJSON(this.articleUri, art => {articles = art;});
	 		return articles;
		}
	}
	
	var app = angular.module('shop');
	app.service('ArticleService', ArticleService);
}