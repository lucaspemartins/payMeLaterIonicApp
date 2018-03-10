angular.module('payMeLaterApp')
    .controller('productsDeleteController', ['$scope', '$window', 'productsDeleteService', function ($scope, $window, productsDeleteService) {
        $scope.vendor_cpf = JSON.parse($window.localStorage.getItem('vendor_cpf'));

        $scope.deleteProduct = function (product_code) {
            productsDeleteService.deleteProduct($scope.vendor_cpf, product_code)
                .then(function (success) {
                    var response = JSON.stringify(success);
                    if (response.indexOf("\"affectedRows\":1") > -1) {
                        alert("Product with code: " + product_code + "\nwas deleted with success!");
                    }
                    else {
                        alert("Product cannot be deleted!");
                    }
                    $window.location.reload();
                }, function (error) {
                    alert(error);
                });
        };

    }]);