/// <reference path="../../_all.ts" />

module WebShop{
	'use strict';
	
	export class SidebarController{
		
		elements : SidebarElement[];
		
		constructor(){
			this.elements.push(new SidebarElement("Home"));
			this.elements.push(new SidebarElement("Warenkorb"));
			this.elements.push(new SidebarElement("Wunschliste"));
			this.elements.push(new SidebarElement("Bestellungen"));
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