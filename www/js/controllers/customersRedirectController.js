angular.module('payMeLaterApp')
.controller('customersRedirectController', ['$scope', '$state', function($scope, $state) {
    $scope.redirectCustomersList = function() {
        $state.go("customerslist");
    };
}]);