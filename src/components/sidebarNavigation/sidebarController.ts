/// <reference path="../../_all.ts" />

module WebShop{
	'use strict';
	
	export class SidebarController{
		
		isActive($scope,$location){
			$scope.isActive = function (viewLocation) { 
	        return viewLocation === $location.path();
	    	};
		}
		test(){
			alert("test");
		}
	}
	
	angular.module('shop')
	.controller('SidebarController', ["$scope", "debounce", SidebarController]);
}