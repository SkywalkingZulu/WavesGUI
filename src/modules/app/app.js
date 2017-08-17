(function () {
    'use strict';

    const app = angular.module('app', [
        'ui.router',

        'app.ui',
        'app.welcome',
        'app.utils'
    ]);

    const AppConfig = function ($urlRouterProvider, $stateProvider, $locationProvider) {
        $locationProvider.html5Mode(true);

        $stateProvider
            .state('welcome', {
                url: '/',
                views: {
                    main: {
                        controller: 'WelcomeCtrl',
                        templateUrl: 'modules/welcome/templates/welcome.html'
                    }
                }
            });
    };

    AppConfig.$inject = [
        '$urlRouterProvider', '$stateProvider', '$locationProvider'
    ];

    app.config(AppConfig);
})();
