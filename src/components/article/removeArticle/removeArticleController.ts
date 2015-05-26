/// <reference path="../../../_all.ts" />

module WebShop{
	'use strict';
	
	export class RemoveArticleController{
		article: Article;
		
		removeArticle(){
			
		}		
	}
	
	angular.module('shop')
	.controller('RemoveArticleController', RemoveArticleController);
}