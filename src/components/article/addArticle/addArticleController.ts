/// <reference path="../../../_all.ts" />

module Article{
	'use strict';
	
	export class AddArticleController{
		article: Article;
		//id:number;
		bezeichnung: string;
		preis: number;
		//description: string;
		ausgesondert: boolean;
		

		
		static $inject = ['AddArticleService','ArticleService'];	
		//static $inject = ['ArticleService'];	
		
		constructor(private addArticleService: AddArticleService , private articleService: ArticleService){
		}
		
		addArticle(){
			//console.log(newArticle.name);
			//this.bezeichnung = newArticle.bezeichnung;
			//this.preis = newArticle.preis;
			this.ausgesondert = false;
			this.article = new Article (this.bezeichnung, this.preis, this.ausgesondert);
			this.addArticleService.addArticle(this.article);
			
			this.bezeichnung = "";
			this.preis = null;
		}
	}
	
	angular.module('shop')
	.controller('AddArticleController', AddArticleController);
}