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
    'use strict';
    var Article = (function () {
        function Article(id, name, price, description) {
            this.id = id;
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
        function ShowArticlesController(shoppingCartService, articleService) {
            this.shoppingCartService = shoppingCartService;
            this.articles = articleService.getAllArticles();
            this.loadAllArticles();
        }
        ShowArticlesController.prototype.getArticlesToShow = function () {
            return this.articlesToShow;
        };
        ShowArticlesController.prototype.loadAllArticles = function () {
            console.log(this.articles);
            this.articlesToShow = this.articles;
        };
        ShowArticlesController.prototype.loadArticlesOfCategory = function (category) {
            this.articlesToShow = [];
            for (var i = 0; i < this.articles.length; i++) {
                if (this.articles[i].category === category) {
                    this.articlesToShow.push(this.articles[i]);
                }
            }
        };
        ShowArticlesController.prototype.loadArticlesContainingSearchText = function (searchText) {
            this.articlesToShow = [];
            for (var i = 0; i < this.articles.length; i++) {
                var currArticle = this.articles[i];
                if (currArticle.name.search(searchText) || currArticle.description.search(searchText)) {
                    this.articlesToShow.push(currArticle);
                }
            }
        };
        ShowArticlesController.prototype.addToShoppingCart = function (article) {
            this.shoppingCartService.addArticle(article, 1);
        };
        //		static $inject = ['ArticleService'];
        //		constructor(articleService: ArticleService){
        //			this.articleService = articleService;
        //			this.articles = this.articleService.getAllArticles();
        //		}
        ShowArticlesController.$inject = ['ShoppingCartService', 'ArticleService'];
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
    angular.module('shop').controller('SidebarController', ["$scope", "debounce", SidebarController]);
})(WebShop || (WebShop = {}));
/// <reference path="../../_all.ts"/>
var App;
(function (App) {
    'use strict';
    var app = angular.module('shop');
    app.config(function ($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'components/home/home.html'
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
        }).when('/shoppingCart', {
            templateUrl: 'components/article/shoppingCart/shoppingCart.html',
            controller: 'ShoppingCartController',
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
        Customer.prototype.test = function () {
        };
        return Customer;
    })();
    _Customer.Customer = Customer;
})(Customer || (Customer = {}));
/// <reference path="../../_all.ts" />
var Order;
(function (_Order) {
    'use strict';
    var Order = (function () {
        function Order(orderItems) {
            this.overAllPrice = 0;
            for (var i = 0; i < this.orderItems.length; i++) {
                this.overAllPrice += this.orderItems[i].amount * this.orderItems[i].article.price;
            }
            this.orderItems = orderItems;
            this.id = Order.globalId++;
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
/// <reference path="../../_all.ts" />
var Article;
(function (Article) {
    'use strict';
    var ArticleService = (function () {
        function ArticleService() {
            this.articleUri = "http://localhost:8443/shop/rest/artikel"; //localhost might have to be exchanged with ip if wildfly is running in VM
        }
        ArticleService.prototype.getAllArticles = function () {
            /*			$.getJSON(this.articleUri, art => {this.articles = art;});
                        return this.articles;
            */
            this.articles = [];
            this.articles.push(new Article.Article(1, "regalA", 200, "subba regal!"));
            this.articles.push(new Article.Article(2, "regalB", 400, "top regal!!"));
            this.articles.push(new Article.Article(3, "regalC", 500, "hammer regal!!!"));
            for (var i = 0; i < this.articles.length; i++) {
                this.articles[i].imageUri = "./img/example" + (i + 1) + ".jpg";
            }
            return this.articles;
        };
        return ArticleService;
    })();
    Article.ArticleService = ArticleService;
    var app = angular.module('shop');
    app.service('ArticleService', ArticleService);
})(Article || (Article = {}));
/// <reference path="../../../_all.ts" />
var Article;
(function (Article) {
    'use strict';
    var ShoppingCartController = (function () {
        function ShoppingCartController($scope, shoppingCartService, orderService) {
            $scope.entries = shoppingCartService.getAllEntries();
            this.shoppingCartService = shoppingCartService;
            this.blub = true;
            this.orderService = orderService;
        }
        ShoppingCartController.prototype.getAllEtries = function () {
            console.log(this.entries);
            return this.entries;
        };
        ShoppingCartController.prototype.loadMock = function () {
            this.shoppingCartService.addMock();
            this.entries = this.shoppingCartService.getAllEntries();
            this.blub = false;
        };
        ShoppingCartController.prototype.increaseAmount = function (entry) {
            entry.amount++;
        };
        ShoppingCartController.prototype.decreaseAmount = function (entry) {
            if (entry.amount === 1) {
                this.entries.splice(this.entries.indexOf(entry), 1);
            }
            entry.amount--;
        };
        ShoppingCartController.prototype.orderAllEntries = function () {
            var orderItems = new Array();
            for (var i = 0; i < this.entries.length; i++) {
                orderItems.push(new Order.OrderItem(this.entries[i].article, this.entries[i].amount));
            }
            this.orderService.createOrder(orderItems);
        };
        ShoppingCartController.$inject = ['$scope', 'ShoppingCartService', 'OrderService'];
        return ShoppingCartController;
    })();
    Article.ShoppingCartController = ShoppingCartController;
    angular.module('shop').controller('ShoppingCartController', ShoppingCartController);
})(Article || (Article = {}));
/// <reference path="../../../_all.ts" />
var Article;
(function (Article) {
    'use strict';
    var ShoppingCartService = (function () {
        function ShoppingCartService() {
            this.entries = [];
        }
        ShoppingCartService.prototype.addMock = function () {
            this.entries = [];
            var articles = new Array();
            articles.push(new Article.Article(1, "regalA", 200, "subba regal!"));
            articles.push(new Article.Article(2, "regalB", 400, "top regal!!"));
            articles.push(new Article.Article(3, "regalC", 500, "hammer regal!!!"));
            for (var i = 0; i < articles.length; i++) {
                articles[i].imageUri = "./img/example" + (i + 1) + ".jpg";
                this.addArticle(articles[i], i + 1);
            }
        };
        ShoppingCartService.prototype.addArticle = function (article, amount) {
            for (var i = 0; i < this.entries.length; i++) {
                if (this.entries[i].article.id == article.id) {
                    this.entries[i].amount += amount;
                    return;
                }
            }
            this.entries.push(new Article.ShoppingCartEntry(article, amount));
        };
        ShoppingCartService.prototype.getAllEntries = function () {
            return this.entries;
        };
        return ShoppingCartService;
    })();
    Article.ShoppingCartService = ShoppingCartService;
    var app = angular.module('shop');
    app.service('ShoppingCartService', ShoppingCartService);
})(Article || (Article = {}));
/// <reference path="../../_all.ts" />
var Order;
(function (Order) {
    'use strict';
    var OrderItem = (function () {
        function OrderItem(article, amount) {
            this.article = article;
            this.amount = amount;
        }
        return OrderItem;
    })();
    Order.OrderItem = OrderItem;
})(Order || (Order = {}));
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
        OrderService.prototype.createOrder = function (orderItems) {
            this.orders.push(new Order.Order(orderItems));
        };
        return OrderService;
    })();
    Order.OrderService = OrderService;
    var app = angular.module('shop');
    app.service('OrderService', OrderService);
})(Order || (Order = {}));
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
/// <reference path="./components/article/shoppingCart/shoppingCartEntry.ts" />
/// <reference path="./components/article/article-service.ts" />
/// <reference path="./components/article/shoppingCart/shoppingCartController.ts" />
/// <reference path="./components/article/shoppingCart/shoppingCart-service.ts" />
/// <reference path="./components/order/orderItem.ts" />
/// <reference path="./components/order/order-service.ts" />
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
