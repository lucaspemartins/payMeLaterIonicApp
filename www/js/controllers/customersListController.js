angular.module('payMeLaterApp')
    .controller('customersListController', ['$scope', '$window', 'customersListService', function ($scope, $window, customersListService) {
        $scope.vendor_cpf = JSON.parse($window.localStorage.getItem('vendor_cpf'));
        $scope.spinner = true;
        $scope.message = false;

        customersListService.getCustomers($scope.vendor_cpf)
            .then(function (success) {
                $scope.customers = success.data;
                $scope.spinner = false;
                if (success.data.length == 0) {
                    $scope.message = true;
                }
            }, function (error) {
                $scope.spinner = false;
                console.log("Error to invoke get service");
            });
    }]);