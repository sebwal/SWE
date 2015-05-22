/// <reference path="../../_all.ts" />
var WebShop;
(function (WebShop) {
    'use strict';
    angular.module('shop', []);
})(WebShop || (WebShop = {}));
/// <reference path="../../_all.ts" />
var WebShop;
(function (WebShop) {
    'use strict';
    var AppController = (function () {
        function AppController() {
        }
        AppController.prototype.test = function () {
            alert("test");
        };
        return AppController;
    })();
    WebShop.AppController = AppController;
    angular.module('shop').controller('AppController', AppController);
})(WebShop || (WebShop = {}));
/// <reference path="../typings/angularjs/angular.d.ts" />
/// <reference path="./components/app/app.ts" />
/// <reference path="./components/app/appController.ts" /> 
//# sourceMappingURL=app.js.map