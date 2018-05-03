angular.module('payMeLaterApp')
    .controller('customersDeleteController', ['$scope', '$window', '$ionicPopup', 'customersDeleteService', function ($scope, $window, $ionicPopup, customersDeleteService) {
        $scope.vendor_cpf = JSON.parse($window.localStorage.getItem('vendor_cpf'));

        $scope.deleteCustomer = function (customer) {
            customersDeleteService.deleteCustomer($scope.vendor_cpf, customer.cpf)
                .then(function (success) {
                    var response = JSON.stringify(success);
                    if (response.indexOf("\"affectedRows\":1") > -1) {
                        $scope.showAlert("Customer: " + customer.user_name + "\nwas deleted with success!");
                    }
                    else {
                        $scope.showAlert("Customer cannot be deleted!");
                    }
                }, function (error) {
                    $scope.showAlert(error);
                });
        };

        $scope.showAlert = function (message) {
            $ionicPopup.alert({
                title: 'Customer',
                content: message
            }).then(function (res) {
                console.log(message);
                $window.location.reload();
            });
        };
    }]);