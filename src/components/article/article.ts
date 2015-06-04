/// <reference path="../../_all.ts" />

module Article{
	'use strict';
	
	export class Article{
		static globalId: number;
		id: number;
		name: string;
		description: string;
		price: number;
		category: string;
		imageUri: string;
		
		constructor(id: number, name: string, price: number, description: string){
			this.id = id;
			this.name = name;
			this.price = price;
			this.description = description;
			
			this.id = Article.globalId++;
		}
	}
}