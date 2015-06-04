/// <reference path="../../_all.ts"/>

module App{
	'use strict';
	
	var app = angular.module('shop');

	app.config(function($routeProvider){
		$routeProvider
		.when('/home', {
			templateUrl: 'components/home/home.html'
		})
		.when('/showArticles', {
			templateUrl: 'components/article/showArticles/showArticles.html',
			controller: 'ShowArticlesController',
			controllerAs: 'ctrl'
		})
		.when('/addArticle', {
			templateUrl: 'components/article/addArticle/addArticle.html',
			controller: 'AddArticleController',
			controllerAs: 'ctrl'
		})
		.when('/removeArticle', {
			templateUrl: 'components/article/removeArticle/removeArticle.html',
			controller: 'RemoveArticleController',
			controllerAs: 'ctrl'
		})
		.when('/shoppingCart',{
			templateUrl: 'components/article/shoppingCart/shoppingCart.html',
			controller: 'ShoppingCartController',
			controllerAs: 'ctrl'
		})
		.otherwise({
			redirectTo: '/home'
		});
	});
}