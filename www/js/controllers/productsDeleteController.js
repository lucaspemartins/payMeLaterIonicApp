angular.module('payMeLaterApp')
    .controller('productsDeleteController', ['$scope', '$window', '$ionicPopup', 'productsDeleteService', function ($scope, $window, $ionicPopup, productsDeleteService) {
        $scope.vendor_cpf = JSON.parse($window.localStorage.getItem('vendor_cpf'));

        $scope.deleteProduct = function (product_code) {
            productsDeleteService.deleteProduct($scope.vendor_cpf, product_code)
                .then(function (success) {
                    var response = JSON.stringify(success);
                    if (response.indexOf("\"affectedRows\":1") > -1) {
                        $scope.showAlert("Product with code: " + product_code + "\nwas deleted with success!");
                    }
                    else {
                        $scope.showAlert("Product cannot be deleted!");
                    }
                    $window.location.reload();
                }, function (error) {
                    $scope.showAlert(error);
                });
        };

        $scope.showAlert = function (message) {
            $ionicPopup.alert({
                title: 'Product',
                content: message
            }).then(function (res) {
                console.log(message);
                $window.location.reload();
            });
        };
    }]);