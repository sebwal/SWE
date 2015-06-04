/// <reference path="../../_all.ts" />

module Article{
	'use strict';
	
	export class Article{
		static globalId: number;
		id: number;
		name: string;
		description: string;
		price: number;
		image: ImageData;
		category: string;
		
		constructor(name: string, price: number, description: string){
			this.name = name;
			this.price = price;
			this.description = description;
			
			this.id = Article.globalId++;
		}
	}
}