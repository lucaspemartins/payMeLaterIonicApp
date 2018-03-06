angular.module('payMeLaterApp')
    .controller('customersDeleteController', ['$scope', '$window', 'customersDeleteService', function ($scope, $window, customersDeleteService) {
        $scope.vendor_cpf = JSON.parse($window.localStorage.getItem('vendor_cpf'));

        $scope.deleteCustomer = function (customer_cpf) {
            customersDeleteService.deleteCustomer($scope.vendor_cpf, customer_cpf)
                .then(function (success) {
                    var response = JSON.stringify(success);
                    if (response.indexOf("\"affectedRows\":1") > -1) {
                        alert("Customer with CPF: " + customer_cpf + "\nwas deleted with success!");
                    }
                    else {
                        alert("Customer cannot be deleted!");
                    }
                    $window.location.reload();
                }, function (error) {
                    alert(error);
                });
        };

    }]);