/// <reference path="../../_all.ts" />

module Article{
	'use strict';
	
	export interface IArticle extends ng.resource.IResource<IArticle>{
		id: number;
		name: string;
		description: string;
		price: number;
		category: Category;
		imageUri: string;
		
	}
}