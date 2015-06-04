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
		
		public getAllArticles(): Array<Article>{
			return this.articles;
		}
		
		public getArticlesOfCategory(category: string): Array<Article>{
			var ret = Array<Article>();
			for(var i = 0; i < this.articles.length; i++){
				if(this.articles[i].category === category){
					ret.push(this.articles[i]);
				}
			}
			return ret;
		}
	}
	
	angular.module('shop')
	.controller('ShowArticlesController', ShowArticlesController);
}