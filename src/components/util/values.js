/**
 * @fileOverview Konstante und Hilfsfunktionen
 * @author <a href="mailto:Juergen.Zimmermann@HS-Karlsruhe.de">J&uuml;rgen Zimmermann</a>
 */

/*jslint es6: true */

(function() {
    'use strict';

    /* global angular: false */
    angular.module('appUtil')
        /**
         * @name BASE_URI
         * @constant
         * @memberOf appUtil
         * @desc Konstante mit der Basis-URI des RESTful Web Service
         */
        // constant() stellt Konstante fuer config() bereit, d.h. wenn die App geladen wird
        .value('BASE_URI', 'https://localhost:8443/shop/rest')

        // globale Variable _ aus lodash oder Underscore
        /* global _: false */
        .value('_omit', _.omit)
        .value('_contains', _.contains);
})();
