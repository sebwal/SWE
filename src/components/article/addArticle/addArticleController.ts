/// <reference path="../../../_all.ts" />

module Article{
	'use strict';
	
	export class AddArticleController{
		article: Article;
		id:number;
		name: string;
		price: number;
		description: string;
		ausgesondert: boolean;
		

		
		static $inject = ['ArticleService'];	
		
		constructor(private articleService: ArticleService){
		}
		
		addArticle(newArticle){
			console.log(newArticle.name);
			
			this.id = newArticle.id;
			this.name = newArticle.name;
			this.price = newArticle.price;
			this.description = newArticle.description;
			this.ausgesondert = false;
			
			
			//this.article = new Article
			//(newArticle.id, newArticle.name, newArticle.price, newArticle.description, this.ausgesondert);
		}
	}
	
	angular.module('shop')
	.controller('AddArticleController', AddArticleController);
}