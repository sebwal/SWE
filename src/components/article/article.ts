/// <reference path="../../_all.ts" />

module Article{
	'use strict';
	
	export enum Category{
		living,
		kitchen,
		bedroom
	}
	
	export class Article{
		bezeichnung: string;
		preis: number;
		category: Category;
		imageUri: string;
		ausgesondert: boolean;

		constructor(bezeichnung: string, preis: number, ausgesondert: boolean){
			this.bezeichnung = bezeichnung;
			this.preis = preis;
			this.ausgesondert = ausgesondert;
		}
		
	
		
	}
}