angular.module('payMeLaterApp')
    .controller('salesListController', ['$scope', '$window', '$ionicModal', '$state', 'salesListService', function ($scope, $window, $ionicModal, $state, salesListService) {
        $scope.vendor_cpf = JSON.parse($window.localStorage.getItem('vendor_cpf'));
        $scope.spinner = true;
        $scope.message = false;
        $scope.sale = {
            products_product_code: '',
            products_product_version: '',
            product_name: '',
            quantity: '',
            price: '',
            user_name: '',
            nickname: ''
        };

        salesListService.getSales($scope.vendor_cpf)
            .then(function (success) {
                $scope.sales = success.data;
                //formatSalesData($scope.sales);
                $scope.spinner = false;
                if (success.data.length == 0) {
                    $scope.message = true;
                }
            }, function (error) {
                $scope.spinner = false;
                console.log("Error to invoke get service");
            });

        formatSalesData = function (salesData) {
            var salesMap = [];
            salesData.forEach(element => {
                if (!salesMap[element.nickname]) {
                    salesMap[element.nickname] = [];
                }
            });

            for (var i = 0; i < salesData.length; i++) {
                salesMap[salesData[i].nickname].push(salesData[i]);
            }
            $scope.sales = salesMap;
        }

        $scope.editProduct = function () {
        };

        $scope.toggleSale = function (sale) {
            if ($scope.isSaleShown(sale)) {
                $scope.shownSale = null;
            } else {
                $scope.shownSale = sale;
            }
        };

        $scope.isSaleShown = function (sale) {
            return $scope.shownSale === sale;
        };
    }]);