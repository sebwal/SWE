/**
 * @fileOverview {@link app.AppController Controller f&uuml;r das (neue) Routing}
 * @author <a href="mailto:Juergen.Zimmermann@HS-Karlsruhe.de">J&uuml;rgen Zimmermann</a>
 */

/*jslint es6: true */
(function() {
    'use strict';

    /**
     * @class app.AppController
     * @desc Controller, um das Routing zu konfigurieren
     */
    class AppController {
        constructor($router) {
            console.info('AppController CREATED');

            $router.config([
                {path: '/', redirectTo: '/home'},

                {path: '/home', component: 'home'},

                {path: '/createArtikel', component: 'createArtikel'},
                {path: '/listArtikel', component: 'listArtikel'},
                {path: '/warenkorb', component: 'warenkorb'},

                {path: '/bestaetigung', component: 'bestaetigung'},

                {path: '/detailsKunde', component: 'detailsKunde'},
                {path: '/listKunden', component: 'listKunden'},
                {path: '/registrierePrivatkunde', component: 'registrierePrivatkunde'},
                {path: '/updateKunde', component: 'updateKunde'}
            ]);
        }
    }

    // "Property Annotation" fuer DI: fuer den Modus 'strict' und fuer Minification
    AppController.$inject = ['$router'];

    /* global angular: false */
    angular.module('app').controller('AppController', AppController);
})();
