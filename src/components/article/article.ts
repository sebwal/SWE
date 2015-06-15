/// <reference path="../../_all.ts" />

module Article{
	'use strict';
	
	export enum Category{
		living,
		kitchen,
		bedroom
	}
	
	export class Article{
		static globalId: number;
		id: number;
		name: string;
		description: string;
		price: number;
		category: Category;
		imageUri: string;
		ausgesondert: boolean;
		
		//constructor(id: number, name: string, category: Category, price: number, description: string){
		constructor(id: number, name: string, price: number, description: string, ausgesondert: boolean){
			this.id = id;
			this.name = name;
			this.price = price;
			this.description = description;
			//this.category = category;
			this.ausgesondert = ausgesondert;
			
			this.id = Article.globalId++;
		}
		
		
	}
}