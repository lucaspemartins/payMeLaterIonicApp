angular.module('payMeLaterApp')
.controller('customersListController', ['$scope', 'customersListService', function($scope, customersListService) {
    $scope.customers = customersListService.getCustomers();
}]);