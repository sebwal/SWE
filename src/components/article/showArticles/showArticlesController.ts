/// <reference path="../../../_all.ts" />

module Article{
	'use strict';
	
	export class ShowArticlesController{
		private articles: Article[];
		private articlesToShow: Article[];
		private shoppingCartService: ShoppingCartService;
		private showArticlesService: ShowArticlesService;
		
//		static $inject = ['ArticleService'];
//		constructor(articleService: ArticleService){
//			this.articleService = articleService;
//			this.articles = this.articleService.getAllArticles();
//		}
		
		static $inject = ['ShoppingCartService', 'ArticleService', 'ShowArticlesService'];
		constructor(shoppingCartService: ShoppingCartService, articleService: ArticleService, showArticlesService: ShowArticlesService) {
			this.shoppingCartService = shoppingCartService;
			this.articles = articleService.getAllArticles();
			this.showArticlesService = showArticlesService;
			
			this.loadArticlesOfCategory(showArticlesService.getCategory());
		}
		
		public getCurrentCategory(){
			this.loadArticlesOfCategory(this.showArticlesService.getCategory());
			return this.showArticlesService.getCategory();		
		}
		
		public getArticlesToShow(): Array<Article> {
			return this.articlesToShow;
		}
		
		public loadAllArticles() {
			this.articlesToShow = this.articles;
		}
		
		public loadArticlesOfCategory(category: Category) {
			this.articlesToShow = [];
			for(var i = 0; i < this.articles.length; i++){
				if(this.articles[i].category === category){
					this.articlesToShow.push(this.articles[i]);
				}
			}
		}
		
		public loadArticlesContainingSearchText(searchText: string){
			this.articlesToShow = [];
			for(var i = 0; i < this.articles.length; i++){
				var currArticle = this.articles[i];
				if(currArticle.name.search(searchText) 
					|| currArticle.description.search(searchText)){
						this.articlesToShow.push(currArticle);
				}
			}
		}
		
		public addToShoppingCart(article: Article){
			this.shoppingCartService.addArticle(article, 1);
		}
	}
	
	angular.module('shop')
	.controller('ShowArticlesController', ShowArticlesController);
}