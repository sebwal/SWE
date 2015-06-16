module Article{
	'use strict';
	
	export class AddArticleService {
        static $inject: Array<string> = ['$resource'];
		private addArticleUri : string ="http://localhost:1337/rest/artikel";
	
    constructor(private resourceService: ng.resource.IResourceService){			
		}	
	
	public addArticle(article: Article){
		var articleRes: IArticleResource = <IArticleResource> this.resourceService(`${this.addArticleUri}`, {}, {
            save:{
                method:'POST',
                headers: {Authorization: 'Basic YWRtaW46cA=='}
            }
           });
		  
		 
		  articleRes.save(article, function(response) {
			  alert("Artikel hinzugefügt")
		  }, function(){alert("Fehler")});
		 
		}
		
	}
	
	
	var app = angular.module('shop');
	//Registriert Service
	app.service('AddArticleService', AddArticleService);
}


