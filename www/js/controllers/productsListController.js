angular.module('payMeLaterApp')
    .controller('productsListController', ['$scope', '$window', 'productsListService', function ($scope, $window, productsListService) {
        $scope.vendor_cpf = JSON.parse($window.localStorage.getItem('vendor_cpf'));
        $scope.spinner = true;
        $scope.message = false;

        productsListService.getProducts($scope.vendor_cpf)
            .then(function (success) {
                $scope.products = success.data;
                $scope.spinner = false;
                if (success.data.length == 0) {
                    $scope.message = true;
                }
            }, function (error) {
                $scope.spinner = false;
                console.log("Error to invoke get service");
            });
    }]);