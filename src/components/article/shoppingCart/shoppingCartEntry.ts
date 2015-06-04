/// <reference path="../../../_all.ts" />

module Article{
	export class ShoppingCartEntry{
		article: Article;
		amount: number;
		
		constructor(article: Article, amount: number){
			this.article = article;
			this.amount = amount;
		}
	}
}