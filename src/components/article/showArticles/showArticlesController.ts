/// <reference path="../../../_all.ts" />

module Article{
	'use strict';
	
	export class ShowArticlesController{
		public articles: Article[];
		private articlesToShow: Article[];
		
		static $inject = ['ShoppingCartService', 'ArticleService', 'ShowArticlesService', 'WishlistService'];
		constructor(private shoppingCartService: ShoppingCartService, private articleService: ArticleService, private showArticlesService: ShowArticlesService, private wishlistService: WishlistService) {
			this.shoppingCartService = shoppingCartService;
			
			this.showArticlesService = showArticlesService;
			this.wishlistService = wishlistService;

			this.articles = [];
			var self = this;
			var articlesPromise = articleService.getArticles();
			articlesPromise.$promise.then(function(value){
				var arr = [];
				arr = value;
				var article;
				arr.forEach(function(element) {
					article = new Article(element.bezeichnung, element.preis, element.ausgesondert);
					console.log(article);
					console.log(element);
					self.articles.push(article);
				}, this);
				
				self.loadArticlesOfCategory(showArticlesService.getCategory());
			});						
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
				if(currArticle.bezeichnung.search(searchText) 
					|| currArticle.bezeichnung.search(searchText)){
						this.articlesToShow.push(currArticle);
				}
			}
		}
		
		public addToShoppingCart(article: Article){
			this.shoppingCartService.addArticle(article, 1);
		}
		
		public addToWishlist(article: Article){
			this.wishlistService.addArticle(article);
		}
	}
	
	angular.module('shop')
	.controller('ShowArticlesController', ShowArticlesController);
}