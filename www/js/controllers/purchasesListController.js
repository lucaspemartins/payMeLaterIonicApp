angular.module('payMeLaterApp')
    .controller('purchasesListController', ['$scope', '$window', '$state', 'purchasesListService', function ($scope, $window, $state, purchasesListService) {
        $scope.vendor_cpf = JSON.parse($window.localStorage.getItem('vendor_cpf'));
        $scope.spinner = true;
        $scope.message = false;
        $scope.purchase = {
            products_product_code: '',
            products_product_version: '',
            product_name: '',
            quantity: '',
            price: '',
            user_name: '',
            nickname: '',
            date_time: '',
            paid_amount: ''
        };
        $scope.total;

        purchasesListService.getPurchases($scope.vendor_cpf)
            .then(function (success) {
                $scope.purchases = success.data;
                $scope.spinner = false;
                if (success.data.length == 0) {
                    $scope.message = true;
                }
            }, function (error) {
                $scope.spinner = false;
                console.log("Error to invoke get service");
            });

        $scope.togglePurchase = function (purchase) {
            if ($scope.isPurchaseShown(purchase)) {
                $scope.shownPurchase = null;
                $scope.quantity = null;
            } else {
                $scope.shownPurchase = purchase;
            }
            $scope.isQuantityModified = false;
        };

        $scope.isPurchaseShown = function (purchase) {
            return $scope.shownPurchase === purchase;
        };

        $scope.transformToFloat = function (parameter) {
            return parseFloat(parameter.replace(",", "."));
        };

        $scope.calculateTotal = function (quantity, price) {
            var total = quantity * $scope.transformToFloat(price);
            return total;
        };

        $scope.calculateDebt = function (paid_amount, total) {
            if (paid_amount != null) {
                return total - $scope.transformToFloat(paid_amount);
            }
            return total;
        };

        $scope.retrievePaidAmount = function (paid_amount) {
            if (paid_amount != null) {
                return paid_amount;
            }
            return "None";
        };
    }]);