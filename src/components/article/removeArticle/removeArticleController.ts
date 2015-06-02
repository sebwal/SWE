/// <reference path="../../../_all.ts" />

module Article{
	'use strict';
	
	export class RemoveArticleController{
		article: Article;
		
		removeArticle(){
			alert("test");
		}		
	}
	
	angular.module('shop')
	.controller('RemoveArticleController', RemoveArticleController);
}