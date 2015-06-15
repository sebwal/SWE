/// <reference path="../../_all.ts" />

module App{
	'use strict';
	export class NavBarController{
		
		static $inject = ['ShowArticlesService'];
		constructor(private service: Article.ShowArticlesService){
		}
		
		setArticleCategory(index: number){
			this.service.setCategory(index);
		}
	}
	
	angular.module('shop').controller('NavBarController', NavBarController);
}