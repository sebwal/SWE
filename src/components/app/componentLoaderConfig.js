/**
 * @fileOverview {@link app.AppController Controller f&uuml;r das (neue) Routing}
 * @author <a href="mailto:Juergen.Zimmermann@HS-Karlsruhe.de">J&uuml;rgen Zimmermann</a>
 */

/*jslint es6: true */
(function() {
    'use strict';

    /**
     * @class app.ComponentLoaderConfig
     * @desc Konfiguration f&uuml;r das Laden der Komponenten
     * @param {Object} $componentLoaderProvider Injizierter ComponentLoaderProvider fuer den Router (ab AngularJS 1.4)
     * @returns {void}
     */
    // config() in AngularJS erfordert Functions, keine Emulation durch Klassen
    function ComponentLoaderConfig($componentLoaderProvider) {
        console.info('ComponentLoaderConfig CREATED');

        // name ist der Name der Komponente bei der Konfiguration von $router im AppController
        /* eslint complexity: [2, 10] */
        $componentLoaderProvider.setTemplateMapping((name) => {
            let subdir = '';
            switch (name) {
                // --------------------------------------
                // artikelverwaltung
                // --------------------------------------
                case 'createArtikel':
                case 'listArtikel':
                case 'warenkorb':
                    subdir = 'artikelverwaltung/';
                    break;

                // --------------------------------------
                // bestellverwaltung
                // --------------------------------------
                case 'bestaetigung':
                    subdir = 'bestellverwaltung/';
                    break;

                // --------------------------------------
                // kundenverwaltung
                // --------------------------------------
                case 'detailsKunde':
                case 'listKunden':
                case 'registrierePrivatkunde':
                case 'updateKunde':
                    subdir = 'kundenverwaltung/';
                    break;

                default:
                    break;
            }

            console.log(`Component Name: ${name} -> /components/${subdir}${name}/${name}.html`);
            return `/components/${subdir}${name}/${name}.html`;
        });
    }

    // "Property Annotation" fuer DI: fuer den Modus 'strict' und fuer Minification
    ComponentLoaderConfig.$inject = ['$componentLoaderProvider'];

    /* global angular: false */
    angular.module('app').config(ComponentLoaderConfig);
})();
