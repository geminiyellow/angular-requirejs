define([], function () {
    return ['$scope', '$http', function ($scope, $http) {
        $scope.scopedAppVersion = 1.1;
        $scope.$apply();
    }];
});