/// <reference path="../../_all.ts" />

module WebShop{
	'use strict';
	export class AppController{
		test() {
			alert("test");
		}
	}
	
	angular.module('shop').controller('AppController', AppController);
}