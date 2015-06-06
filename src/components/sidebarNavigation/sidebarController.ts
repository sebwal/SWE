/// <reference path="../../_all.ts" />

module WebShop{
	'use strict';
	
	export class SidebarController{
		
		elements : SidebarElement[];
		
		constructor(){
			this.elements = [];
			this.elements.push(new SidebarElement("Home", "/home", "glyphicon-home", false));
			this.elements.push(new SidebarElement("Warenkorb", "/shoppingCart", "glyphicon-shopping-cart", false));
			this.elements.push(new SidebarElement("Wunschliste", "/wishlist", "glyphicon-piggy-bank", false));
			this.elements.push(new SidebarElement("Bestellungen", "/orderHistory", "glyphicon-ok-sign", false));
		}
		
		public alertElements(){
			alert("test");
		}
		
		isActive($scope,$location){
			$scope.isActive = function (viewLocation) { 
	        return viewLocation === $location.path();
	    	};
		}
		
		
		
	}
	
	angular.module('shop')
	.controller('SidebarController', SidebarController);
}