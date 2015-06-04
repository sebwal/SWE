/// <reference path="../../_all.ts" />

module Order{
	'use strict';
		
	export class OrderItem{
		article: Article.Article;
		amount: number;
		
		constructor(article: Article.Article, amount: number){
			this.article = article;
			this.amount = amount;
		}
	}
}