/// <reference path="../../../_all.ts" />

module Article{
	'use strict';
	
	export class AddArticleController{
		article: Article;
		
		addArticle(){
		}
	}
	
	angular.module('shop')
	.controller('AddArticleController', AddArticleController);
}