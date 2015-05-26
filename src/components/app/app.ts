/// <reference path="../../_all.ts" />

module WebShop {
	'use strict';
	
	var app = angular.module('shop', ['ngRoute']);

	//routing
	app.config(function($routeProvider){
		$routeProvider
		.when('/home', {
			templateUrl: 'components/home/home.html'//,
//			controller: 'HomeController',
//			controllerAs: 'home'
		})
		.when('/showArticles', {
			templateUrl: 'components/article/showArticles/showArticles.html'//,
//			controller: 'ShowArticlesController',
//			controllerAs: 'showArticles'
		})
		.when('/addArticle', {
			templateUrl: 'components/article/addArticle/addArticle.html'//,
//			controller: 'AddArticleController',
//			controllerAs: 'addArticle'
		})
		.when('/removeArticle', {
			templateUrl: 'components/article/removeArticle/removeArticle.html'//,
//			controller: 'RemoveArticleController',
//			controllerAs: 'removeArticle'
		})
		.otherwise({
			redirectTo: '/home'
		});
	});
}