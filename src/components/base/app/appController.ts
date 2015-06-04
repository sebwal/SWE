/// <reference path="../../../_all.ts" />

module App{
	'use strict';
	export class AppController{
		private service: Article.ShowArticlesService;
		
		static $inject = ['ShowArticlesService'];
		constructor(service: Article.ShowArticlesService){
			this.service = service;
		}
		
		setArticleCategory(index: number){
			this.service.setCategory(index);
		}
	}
	
	angular.module('shop').controller('AppController', AppController);
}