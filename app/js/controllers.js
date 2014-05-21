define(['libs/angular.min.js'], function (angular) {
    'use strict';

    return angular.module('myApp.controllers', ['myApp.services'])
        .controller('CoreCtrl', ['$scope', '$injector', '$routeParams', function ($scope, $injector, $routeParams) {
            require(['controllers/' + $routeParams.path], function (ctrl) {
                $injector.invoke(ctrl, this, {'$scope': $scope});
            });
        }]);
});