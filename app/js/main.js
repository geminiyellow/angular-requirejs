require.config({
    paths: {
        angular: 'libs/angular.min',
        angularRoute: 'libs/angular-route.min'
    },
    shim: {
        'angular': {'exports': 'angular'},
        'angularRoute': ['angular']
    },
    priority: [
        "angular"
    ]
});

window.name = "NG_DEFER_BOOTSTRAP!";

require([
    'libs/angular.min.js',
    'app',
    'routes',
], function (angular, app, routes) {
    'use strict';

    angular.element().ready(function () {
        angular.resumeBootstrap([app['name']]);
    });
});
