angular.module('payMeLaterApp')
    .controller('customersAddController', ['$scope', '$window', '$state', 'customersAddService', function ($scope, $window, $state, customersAddService) {
        $scope.vendor_cpf = JSON.parse($window.localStorage.getItem('vendor_cpf'));
        $scope.message = false;

        customersAddService.getPossibleCustomers($scope.vendor_cpf)
            .then(function (success) {
                if (success.data.length > 0) {
                    $scope.customers = success.data;
                }
                else {
                    $scope.message = true;
                }
            }, function (error) {
                console.log("Error to invoke get service");
            });

        $scope.addCustomer = function (customerCpf) {
            customersAddService.addCustomer($scope.vendor_cpf, customerCpf)
                .then(function (success) {
                    var response = JSON.stringify(success);
                    if (response.indexOf("\"affectedRows\":1") > -1) {
                        alert("Customer with CPF: " + customerCpf + "\nwas added with success!");
                    }
                    else {
                        alert("Customer cannot be added!");
                    }
                    $state.go("home.customerslist");
                    $window.location.reload();
                }, function (error) {
                    console.log("Error to invoke get service");
                });
        }
    }]);