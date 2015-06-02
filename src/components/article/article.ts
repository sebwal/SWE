/// <reference path="../../_all.ts" />

module Article{
	export class Article{
		static globalId: number;
		id: number;
		name: string;
		description: string;
		price: number;
		image: ImageData;
		
		constructor(name: string, price: number, description: string){
			this.name = name;
			this.price = price;
			this.description = description;
			
			this.id = Article.globalId++;
		}
	}
}