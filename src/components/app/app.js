/// <reference path="../../_all.ts" />
var WebShop;
(function (WebShop) {
    'use strict';
    var app = angular.module('shop', []);
    app.controller('AppController', WebShop.AppController);
})(WebShop || (WebShop = {}));
/// <reference path="../../_all.ts" />
var WebShop;
(function (WebShop) {
    'use strict';
    var AppController = (function () {
        function AppController() {
        }
        AppController.prototype.test = function () {
            console.log("test...asdfaf");
        };
        return AppController;
    })();
    WebShop.AppController = AppController;
})(WebShop || (WebShop = {}));
/// <reference path="../node_modules/angularjs/angular.d.ts" />
/// <reference path="./components/app/app.ts" />
/// <reference path="./components/app/appController.ts" /> 
//# sourceMappingURL=app.js.map