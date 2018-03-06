angular.module('payMeLaterApp')
    .controller('customersListController', ['$scope', '$window', 'customersListService', function ($scope, $window, customersListService) {
        $scope.vendor_cpf = JSON.parse($window.localStorage.getItem('vendor_cpf'));

        customersListService.getCustomers($scope.vendor_cpf)
            .then(function (success) {
                $scope.customers = success.data;
            }, function (error) {
                console.log("Error to invoke get service");
            });
    }]);