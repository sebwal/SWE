/// <reference path="../../_all.ts" />

module Article{
	'use strict';
	
	export class ArticleService{
		private articles: Array<Article>;
		static $inject: Array<string> = ['$resource'];
		private articleUri = "http://localhost:1337/rest/katalog";

		constructor(private resourceService: ng.resource.IResourceService){			
		}
		getArticles(): any{
			var articleRes: IArticleResource = <IArticleResource> this.resourceService(`${this.articleUri}`, {}, {            
			            query: {
			                method: 'GET',   
			                isArray: true,         
			                headers: {Authorization: 'Basic YWRtaW46cA=='}
			             }
			            });

			//ArticleResource: Hier werden Daten geholt
            return articleRes.query(null,function() {},function(){alert("Fehler")});		
		}
		
		postArticles(): any {
			
			
		}
	}
	
	var app = angular.module('shop');
	app.service('ArticleService', ArticleService);
}