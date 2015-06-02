/// <reference path="../../../_all.ts" />

module Article{
	'use strict';
	
	export class RemoveArticleController{
		article: Article;
		
		removeArticle(){
			
		}		
	}
	
	angular.module('shop')
	.controller('RemoveArticleController', RemoveArticleController);
}