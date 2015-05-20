/**
 * @fileOverview {@link appUtil.iamService Service f&uuml;r Identity und Access Management (IAM)}
 * @author <a href="mailto:Juergen.Zimmermann@HS-Karlsruhe.de">J&uuml;rgen Zimmermann</a>
 */

// Der Einfachheit halber ist der RESTful Web Service mit BASIC-Authentifizierung implementiert und
// nicht mit FORM-based Authentifizierung oder mit OAuth2

/*jslint es6: true */
(function() {
    'use strict';

    // Cookies inspizieren:
    // Chrome: [Chrome Menu] > Tools > Entwicklertools > Resources > Cookies > localhost
    //         https://developers.google.com/chrome-developer-tools
    // Firefox: durch das Add-on "Web Developer" https://addons.mozilla.org/en-US/firefox/addon/web-developer

    // Cookies in AngularJS sind keine sicheren Cookies, d.h. das Attribut 'secure' ist nicht gesetzt
    // http://en.wikipedia.org/wiki/HTTP_cookie#Secure_cookie

    // Authentifizierung mit einem Login-Formular:
    // http://www.espeo.pl/authentication-in-angularjs-application

    /**
     * @class appUtil.IamService
     * @desc Service f&uuml;r Identity und Access Management (IAM)
     */
    class IamService {
        constructor($resource, BASE_URI, $location, $window) {
            console.info('IamService CREATED');

            this.$resource = $resource;
            this.loginUri = `${BASE_URI}/iam/login`;
            this.logoutUri = `${BASE_URI}/iam/logout`;
            this.$location = $location;
            this.btoa = $window.btoa;

            /**
             * @name basicAuth
             * @type String
             * @memberOf appUtil.IamService
             * @desc Base64-String mit den Daten f&uuml;r die BASIC-Authentifizierung
             */
            this.basicAuth = null;

            /**
             * @name identity
             * @type Object
             * @memberOf appUtil.iamService
             * @desc Objekt mit den Login-Daten
             */
            this.identity = null;
        }

        /**
         * @name login
         * @function
         * @memberOf appUtil.IamService
         * @desc Einloggen mit Loginname und Passwort
         * @param {String} loginname Loginname
         * @param {String} password Password
         * @param {Function} success Callback-Function f&uuml;r erfolgreiches Einloggen
         * @param {Function} error Callback-Function f&uuml;r ein fehlgeschlagenes Login
         * @returns {void}
         */
        login(loginname, password, success, error) {
            this.basicAuth = 'Basic ' + this.btoa(loginname + ':' + password);
            console.info(`iamService.login(): loginname = ${loginname}, password=${password}, `
                         + `loginUri=${this.loginUri}, basicAuth=${this.basicAuth}`);

            // $resource:   http://docs.angularjs.org/api/ngResource/service/$resource
            // "A factory which creates a resource object that lets you interact with RESTful server-side data sources.
            // The returned resource object has action methods which provide high-level behaviors without the need
            // to interact with the low level $http service. Requires the ngResource module to be installed."

            let loginResource = this.$resource(`${this.loginUri}`, {},
                                               {login: {method: 'GET', headers: {Authorization: this.basicAuth}}});
            loginResource.login(null, success, error);
        }

        /**
         * @name getLoginname
         * @function
         * @memberOf appUtil.IamService
         * @desc Ermitteln des Loginnamens
         * @returns {String} Loginname
         */
        getLoginname() {
            return this.identity.loginname;
        }

        /**
         * @name getBasicAuth
         * @function
         * @memberOf appUtil.IamService
         * @desc Ermitteln des Base64-Strings f&uuml;r BASIC-Authentifizierung
         * @returns {String} Base64-String f&uuml;r BASIC-Authentifizierung
         */
        getBasicAuth() {
            return this.basicAuth;
        }

        /**
         * @name setBasicAuth
         * @function
         * @memberOf appUtil.IamService
         * @desc Setzen des Base64-Strings f&uuml;r BASIC-Authentifizierung
         * @param {String} newBasicAuth Neuer Base64-String f&uuml;r BASIC-Authentifizierung
         * @returns {void}
         */
        setBasicAuth(newBasicAuth) {
            this.basicAuth = newBasicAuth;
        }

        /**
         * @name isLoggedIn
         * @function
         * @memberOf appUtil.IamService
         * @desc Ermitteln, ob der aktuelle User eingeloggt ist oder nicht
         * @returns {boolean} true, falls der aktuelle User eingeloggt ist; false sonst
         */
        isLoggedIn() {
            return this.identity !== null;
        }

        /**
         * @name inRolle
         * @function
         * @memberOf appUtil.IamService
         * @desc Pufferung des Identity-Objekts nach erfolgreichem Login
         * @param {String} loginResponse Response-Objekt nach erfolgreichem Login
         * @returns {void}
         */
        saveIdentity(loginResponse) {
            delete loginResponse.password;
            delete loginResponse.passwordWdh;
            delete loginResponse.expirationDate;
            delete loginResponse.enabled;
            this.identity = loginResponse;
            console.log(`Identity: ${angular.toJson(this.identity, true)}`);
        }

        /**
         * @name inRolle
         * @function
         * @memberOf appUtil.IamService
         * @desc Ermitteln, ob der aktuelle User die angegebene Rolle hat oder nicht
         * @param {String} rolle Die zu pr&uuml;fende Rolle
         * @returns {boolean} true, falls der aktuelle User die angegebene Rolle hat; false sonst
         */
        inRolle(rolle) {
            /* eslint no-undefined: 0 */
            if (this.identity === null || this.identity.rollen === undefined) {
                return false;
            }
            return this.identity.rollen[rolle];
        }

        /**
         * @name reset
         * @function
         * @memberOf appUtil.IamService
         * @desc Zur&uuml;cksetzen des Base64-Strings f&uuml;r BASIC-Authentifizierung und des Identity-Objekts
         * @returns {void}
         */
        reset() {
            this.basicAuth = null;
            this.identity = null;
        }

        /**
         * @name logout
         * @function
         * @memberOf appUtil.IamService
         * @desc Logout mit {@link appUtil.iamService.reset Zur&uuml;cksetzen der Daten}
         *       und Weiterleitung zur Startseite
         * @returns {void}
         */
        logout() {
            console.clear();
            this.reset();
            let logoutResource = this.$resource(this.logoutUri, {}, {logout: {method: 'POST'}});
            logoutResource.logout();
            this.$location.path('/');
        }
    }

    // "Property Annotation" fuer DI: fuer den Modus 'strict' und fuer Minification
    IamService.$inject = ['$resource', 'BASE_URI', '$location', '$window'];

    /* global angular: false */
    angular.module('appUtil').service('iamService', IamService);
})();
