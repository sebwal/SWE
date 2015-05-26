/// <reference path="../../../_all.ts" />

module WebShop{
	'use strict';
	
	export class ShowArticlesController{
		articles: Article[];
	}
	
	angular.module('shop')
	.controller('ShowArticlesController', ShowArticlesController);
}