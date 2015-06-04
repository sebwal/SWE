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
            alert("test");
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
        function ShowArticlesController(articleService) {
            this.articleService = articleService;
            this.articles = this.articleService.getAllArticles();
        }
        ShowArticlesController.prototype.getAllArticles = function () {
            return this.articles;
        };
        ShowArticlesController.$inject = ['ArticleService'];
        return ShowArticlesController;
    })();
    Article.ShowArticlesController = ShowArticlesController;
    angular.module('shop').controller('ShowArticlesController', ShowArticlesController);
})(Article || (Article = {}));
/// <reference path="../../_all.ts" />
var WebShop;
(function (WebShop) {
    'use strict';
    var SidebarController = (function () {
        function SidebarController() {
        }
        SidebarController.prototype.isActive = function ($scope, $location) {
            $scope.isActive = function (viewLocation) {
                return viewLocation === $location.path();
            };
        };
        SidebarController.prototype.test = function () {
            alert("test");
        };
        return SidebarController;
    })();
    WebShop.SidebarController = SidebarController;
    angular.module('shop').controller('SidebarController', SidebarController);
})(WebShop || (WebShop = {}));
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
/// <reference path="../../_all.ts" />
var Customer;
(function (_Customer) {
    var Customer = (function () {
        function Customer() {
        }
        return Customer;
    })();
    _Customer.Customer = Customer;
})(Customer || (Customer = {}));
/// <reference path="../../_all.ts" />
var Order;
(function (_Order) {
    var Order = (function () {
        function Order() {
        }
        return Order;
    })();
    _Order.Order = Order;
})(Order || (Order = {}));
/// <reference path="../../../_all.ts" />
var Article;
(function (Article) {
    var ShoppingCartEntry = (function () {
        function ShoppingCartEntry(article, amount) {
            this.article = article;
            this.amount = amount;
        }
        return ShoppingCartEntry;
    })();
    Article.ShoppingCartEntry = ShoppingCartEntry;
})(Article || (Article = {}));
/// <reference path="../typings/tsd.d.ts" />
/// <reference path="./components/base/app/app.ts" />
/// <reference path="./components/base/app/appController.ts" />
/// <reference path="./components/article/article.ts" />
/// <reference path="./components/article/addArticle/addArticleController.ts" />
/// <reference path="./components/article/removeArticle/removeArticleController.ts" />
/// <reference path="./components/article/showArticles/showArticlesController.ts" />
/// <reference path="../old_router_for_typescript/angular-route.d.ts" />
/// <reference path="./components/sidebarNavigation/sidebarController.ts" />
/// <reference path="./components/base/routing.ts" />
/// <reference path="./components/customer/customer.ts" />
/// <reference path="./components/order/order.ts" />
/// <reference path="./components/article/shopping_cart/shoppingCartEntry.ts" />
/// <reference path="../../_all.ts" />
var Article;
(function (Article) {
    'use strict';
    var ArticleService = (function () {
        function ArticleService() {
            this.articleUri = "http://localhost:8443/shop/rest/artikel"; //localhost might have to be exchanged with ip if wildfly is running in VM
        }
        ArticleService.prototype.getAllArticles = function () {
            var articles;
            $.getJSON(this.articleUri, function (art) {
                articles = art;
            });
            return articles;
        };
        return ArticleService;
    })();
    Article.ArticleService = ArticleService;
    var app = angular.module('shop');
    app.service('ArticleService', ArticleService);
})(Article || (Article = {}));
/// <reference path="../../_all.ts" />
var Customer;
(function (Customer) {
    'use strict';
    var CustomerService = (function () {
        function CustomerService() {
            this.customerUri = "http://localhost:8443/shop/rest/kunde"; //localhost might have to be exchanged with ip if wildfly is running in VM
        }
        CustomerService.prototype.getAllCustomers = function () {
            var customers;
            $.getJSON(this.customerUri, function (cust) {
                customers = cust;
            });
            return customers;
        };
        return CustomerService;
    })();
    Customer.CustomerService = CustomerService;
    var app = angular.module('shop');
    app.service('CustomerService', CustomerService);
})(Customer || (Customer = {}));
/// <reference path="../../_all.ts" />
var Order;
(function (Order) {
    'use strict';
    var OrderService = (function () {
        function OrderService() {
            this.orderUri = "http://localhost:8443/shop/rest/bestellungen"; //localhost might have to be exchanged with ip if wildfly is running in VM
        }
        OrderService.prototype.getAllOrders = function () {
            var orders;
            $.getJSON(this.orderUri, function (ord) {
                orders = ord;
            });
            return orders;
        };
        return OrderService;
    })();
    Order.OrderService = OrderService;
    var app = angular.module('shop');
    app.service('OrderService', OrderService);
})(Order || (Order = {}));
/// <reference path="../../../_all.ts" />
var Article;
(function (Article) {
    'use strict';
    var ShoppingCartService = (function () {
        function ShoppingCartService() {
        }
        ShoppingCartService.prototype.addArticle = function (article, amount) {
            for (var i = 0; i < this.entries.length; i++) {
                if (this.entries[i].article.id == article.id) {
                    this.entries[i].amount += amount;
                    return;
                }
            }
            this.entries.push(new Article.ShoppingCartEntry(article, amount));
        };
        return ShoppingCartService;
    })();
    Article.ShoppingCartService = ShoppingCartService;
    var app = angular.module('shop');
    app.service('ShoppingCartService', ShoppingCartService);
})(Article || (Article = {}));
