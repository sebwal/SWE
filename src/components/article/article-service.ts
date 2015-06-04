/// <reference path="../../_all.ts" />

module Article{
	'use strict';
	
	export class ArticleService{
		private articles: Array<Article>;
		private articleUri = "http://localhost:8443/shop/rest/artikel"; //localhost might have to be exchanged with ip if wildfly is running in VM

		getAllArticles(): Article[]{
/*			$.getJSON(this.articleUri, art => {this.articles = art;});
	 		return this.articles;
*/			 
			this.articles = [];
			this.articles.push(new Article(1, "regalA", 200, "subba regal!"));
			this.articles.push(new Article(2, "regalB", 400, "top regal!!"));
			this.articles.push(new Article(3, "regalC", 500, "hammer regal!!!"));
			
			for(var i = 0; i < this.articles.length; i++){
				this.articles[i].imageUri = "./img/example" + (i + 1) + ".jpg";
			}
			
			return this.articles;
		}
	}
	
	var app = angular.module('shop');
	app.service('ArticleService', ArticleService);
}