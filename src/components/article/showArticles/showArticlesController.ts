/// <reference path="../../../_all.ts" />

module Article{
	'use strict';
	
	export class ShowArticlesController{
		private articles: Article[];
		private articleService: ArticleService;
		
		static $inject = ['ArticleService'];
		constructor(articleService: ArticleService){
			this.articleService = articleService;
			this.articles = this.articleService.getAllArticles();
		}
		
		public getAllArticles(){
			return this.articles;
		}
	}
	
	angular.module('shop')
	.controller('ShowArticlesController', ShowArticlesController);
}