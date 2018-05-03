angular.module('payMeLaterApp')
.controller('productsAddController', ['$scope', '$state', '$window', '$ionicPopup', 'productsAddService', function($scope, $state, $window, $ionicPopup, productsAddService) {
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
            $scope.showAlert("Product added successfully!");
            $state.go("home.productslist");
            $window.location.reload();
        }, function (error) {
            console.log("Error to invoke service");
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