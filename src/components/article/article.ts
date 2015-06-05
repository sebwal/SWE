/// <reference path="../../_all.ts" />

module Article{
	'use strict';
	
	export class Article{
		static globalId: number;
		id: number;
		name: string;
		description: string;
		price: number;
		category: Category;
		imageUri: string;
		
		constructor(id: number, name: string, category: Category, price: number, description: string){
			this.id = id;
			this.name = name;
			this.price = price;
			this.description = description;
			this.category = category;
			
			this.id = Article.globalId++;
		}
	}
}