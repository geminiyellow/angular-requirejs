define(['libs/angular.min.js', 'app'], function (angular, app) {
    'use strict';

    return app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/test/:path', {
            templateUrl: function ($routeParams) {
                return 'app/views/' + $routeParams.path + '.html';
            },
            controller: 'CoreCtrl'
        });
    }]);
});