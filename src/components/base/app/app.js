/// <reference path="../../../_all.ts" />
var App;
(function (App) {
    'use strict';
    var app = angular.module('shop', ['ngRoute']);
})(App || (App = {}));
/// <reference path="../../../_all.ts" />
var App;
(function (App) {
    'use strict';
    var AppController = (function () {
        function AppController() {
        }
        return AppController;
    })();
    App.AppController = AppController;
    angular.module('shop').controller('AppController', AppController);
})(App || (App = {}));
/// <reference path="../../_all.ts" />
var Article;
(function (_Article) {
    var Article = (function () {
        function Article(name, price, description) {
            this.name = name;
            this.price = price;
            this.description = description;
            this.id = Article.globalId++;
        }
        return Article;
    })();
    _Article.Article = Article;
})(Article || (Article = {}));
/// <reference path="../../../_all.ts" />
var Article;
(function (Article) {
    'use strict';
    var AddArticleController = (function () {
        function AddArticleController() {
        }
        AddArticleController.prototype.addArticle = function () {
        };
        return AddArticleController;
    })();
    Article.AddArticleController = AddArticleController;
    angular.module('shop').controller('AddArticleController', AddArticleController);
})(Article || (Article = {}));
/// <reference path="../../../_all.ts" />
var Article;
(function (Article) {
    'use strict';
    var RemoveArticleController = (function () {
        function RemoveArticleController() {
        }
        RemoveArticleController.prototype.removeArticle = function () {
        };
        return RemoveArticleController;
    })();
    Article.RemoveArticleController = RemoveArticleController;
    angular.module('shop').controller('RemoveArticleController', RemoveArticleController);
})(Article || (Article = {}));
/// <reference path="../../../_all.ts" />
var Article;
(function (Article) {
    'use strict';
    var ShowArticlesController = (function () {
        function ShowArticlesController() {
            this.articles.push(new Article.Article("article a", 29.95, "blubdidub"));
        }
        return ShowArticlesController;
    })();
    Article.ShowArticlesController = ShowArticlesController;
    angular.module('shop').controller('ShowArticlesController', ShowArticlesController);
})(Article || (Article = {}));
/// <reference path="../../_all.ts"/>
var App;
(function (App) {
    'use strict';
    var app = angular.module('shop');
    app.config(function ($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'components/home/home.html',
            controller: 'HomeController',
            controllerAs: 'ctrl'
        }).when('/showArticles', {
            templateUrl: 'components/article/showArticles/showArticles.html',
            controller: 'ShowArticlesController',
            controllerAs: 'ctrl'
        }).when('/addArticle', {
            templateUrl: 'components/article/addArticle/addArticle.html',
            controller: 'AddArticleController',
            controllerAs: 'ctrl'
        }).when('/removeArticle', {
            templateUrl: 'components/article/removeArticle/removeArticle.html',
            controller: 'RemoveArticleController',
            controllerAs: 'ctrl'
        }).otherwise({
            redirectTo: '/home'
        });
    });
})(App || (App = {}));
/// <reference path="../typings/tsd.d.ts" />
/// <reference path="./components/base/app/app.ts" />
/// <reference path="./components/base/app/appController.ts" />
/// <reference path="./components/article/article.ts" />
/// <reference path="./components/article/addArticle/addArticleController.ts" />
/// <reference path="./components/article/removeArticle/removeArticleController.ts" />
/// <reference path="./components/article/showArticles/showArticlesController.ts" />
/// <reference path="../old_router_for_typescript/angular-route.d.ts" />
/// <reference path="./components/base/routing.ts" /> 
/// <reference path="../../_all.ts" />
var Article;
(function (Article) {
    'use strict';
    var ArticleService = (function () {
        function ArticleService() {
        }
        return ArticleService;
    })();
    Article.ArticleService = ArticleService;
    var app = angular.module('shop');
    app.service('ArticleService', ArticleService);
})(Article || (Article = {}));
