angular.module('payMeLaterApp')
.controller('customersListController', ['$scope', 'customersListService', function($scope, customersListService) {
    customersListService.getCustomers()
    .then(function (success) {
        $scope.customers = success.data;      
    }, function (error) {
        console.log("Error to invoke get service");
    });
}]);