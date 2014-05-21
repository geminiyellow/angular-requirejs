define([], function () {
    return ['$scope', '$http', function ($scope, $http) {
        $scope.welcomeMessage = 'hey this is view2.js!';
        $scope.$apply();
    }];
});