angular.module('payMeLaterApp')
.controller('productsAddController', ['$scope', '$state', '$window', 'productsAddService', function($scope, $state, $window, productsAddService) {
    $scope.vendor_cpf = JSON.parse($window.localStorage.getItem('vendor_cpf'));
    $scope.product = {
        product_name: '',
        product_version: '',
        product_code: '',
        price: '',
        user_cpf: $scope.vendor_cpf
    };

    $scope.onSubmit = function () {
        productsAddService.onSubmit($scope.product, $scope.vendor_cpf)
        .then(function (success) {
            alert("Product added successfully!");
            $state.go("home.productslist");
        }, function (error) {
            console.log("Error to invoke service");
        });
    };
}]);