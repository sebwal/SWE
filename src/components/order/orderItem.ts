/// <reference path="../../_all.ts" />

module Order{
	'use strict';
		
	export class OrderItem{
		private article: Article.Article;
		private amount: number;
		
		constructor(article: Article.Article, amount: number){
			this.article = article;
			this.amount = amount;
		}
	}
}