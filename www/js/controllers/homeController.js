angular.module('payMeLaterApp')
    .controller('homeController', ['$scope', '$window', '$state', function ($scope, $window, $state) {
        $scope.logout = function () {
            $window.localStorage.clear();
            $state.go('login');
        };
    }]);