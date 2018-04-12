angular.module('payMeLaterApp')
    .controller('customersAddController', ['$scope', '$window', '$state', '$ionicPopup', 'customersAddService', function ($scope, $window, $state, $ionicPopup, customersAddService) {
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

        $scope.addCustomer = function (customer) {
            customersAddService.addCustomer($scope.vendor_cpf, customer.cpf)
                .then(function (success) {
                    var response = JSON.stringify(success);
                    if (response.indexOf("\"affectedRows\":1") > -1) {
                        $scope.showAlert("Customer: " + customer.user_name + "\nwas added with success!");
                    }
                    else {
                        $scope.showAlert("Customer cannot be added!");
                    }
                }, function (error) {
                    console.log("Error to invoke get service");
                });
        }

        $scope.showAlert = function (message) {
            $ionicPopup.alert({
                title: 'Customer',
                content: message
            }).then(function (res) {
                console.log(message);
                $state.go("home.customerslist");
                $window.location.reload();
            });
        };
    }]);