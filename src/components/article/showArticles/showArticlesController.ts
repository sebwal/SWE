/// <reference path="../../../_all.ts" />

module Article{
	'use strict';
	
	export class ShowArticlesController{
		private articles: Article[];
		private articleService: ArticleService;
		
//		static $inject = ['ArticleService'];
//		constructor(articleService: ArticleService){
//			this.articleService = articleService;
//			this.articles = this.articleService.getAllArticles();
//		}
		
		constructor(){
			this.articles = new Array<Article>();
			this.articles.push(new Article("regalA", 200, "subba regal!"));
			this.articles.push(new Article("regalB", 400, "top regal!!"));
			this.articles.push(new Article("regalC", 500, "hammer regal!!!"));
			
			for(var i = 0; i < this.articles.length; i++){
				this.articles[i].imageUri = "./img/example" + (i + 1) + ".jpg";
			}
		}
		
		public getAllArticles(){
			console.log(this.articles);
			return this.articles;
		}
	}
	
	angular.module('shop')
	.controller('ShowArticlesController', ShowArticlesController);
}