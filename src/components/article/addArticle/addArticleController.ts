/// <reference path="../../../_all.ts" />

module WebShop{
	'use strict';
	
	export class AddArticleController{
		article: Article;
		
		addArticle(){
			
		}
	}
	
	angular.module('shop')
	.controller('AddArticleController', AddArticleController);
}