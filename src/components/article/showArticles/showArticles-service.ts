/// <reference path="../../../_all.ts" />

module Article{
	'use strict';

	export enum Category{
		living,
		kitchen,
		bedroom
	}
	
	export class ShowArticlesService{
		category: Category;
		
		public setCategory(index: number){
			switch(index){
				case 1: this.category = Category.kitchen; break;
				case 2: this.category = Category.bedroom; break;
				case 0:
				default: this.category = Category.living; break;				
			}
		}
		
		public getCategory(){
			return this.category;
		}
	}
	
	var app = angular.module('shop');
	app.service('ShowArticlesService', ShowArticlesService);
}