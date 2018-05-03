angular.module('payMeLaterApp')
    .controller('salesListController', ['$scope', '$window', '$ionicModal', '$state', 'salesListService', 'salesEditService', 'customersListService', function ($scope, $window, $ionicModal, $state, salesListService, salesEditService, customersListService) {
        $scope.vendor_cpf = JSON.parse($window.localStorage.getItem('vendor_cpf'));
        $scope.spinner = true;
        $scope.message = false;
        $scope.message_customer = false;
        $scope.sale = {
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
        $scope.saleEditBody = {
            vendor_cpf: '',
            customer_cpf: '',
            products_product_code: '',
            products_product_version: '',
            quantity: '',
            date_time: '',
            paid_amount: ''
        }
        $scope.total;

        salesListService.getSales($scope.vendor_cpf)
            .then(function (success) {
                $scope.sales = success.data;
                $scope.spinner = false;
                if (success.data.length == 0) {
                    $scope.message = true;
                }
            }, function (error) {
                $scope.spinner = false;
                console.log("Error to invoke get service");
            });

        customersListService.getCustomers($scope.vendor_cpf)
            .then(function (success) {
                $scope.customers = success.data;
                $scope.spinner = false;
                if (success.data.length == 0) {
                    $scope.message_customer = true;
                }
            }, function (error) {
                $scope.spinner = false;
                console.log("Error to invoke get service");
            });

        $scope.editSale = function (sale) {
            $scope.saleEditBody.vendor_cpf = $scope.vendor_cpf;
            $scope.saleEditBody.customer_cpf = sale.customer_cpf;
            $scope.saleEditBody.products_product_code = sale.products_product_code;
            $scope.saleEditBody.products_product_version = sale.products_product_version;
            $scope.saleEditBody.quantity = sale.quantity;
            $scope.saleEditBody.date_time = sale.date_time;
            $scope.saleEditBody.paid_amount = sale.paid_amount;
            salesEditService.editSale($scope.saleEditBody)
                .then(function (success) {
                    $window.location.reload();
                }, function (error) {
                    console.log("Error to invoke get service");
                });
        };

        $scope.toggleSale = function (sale) {
            if ($scope.isSaleShown(sale)) {
                $scope.shownSale = null;
                $scope.quantity = null;
            } else {
                $scope.shownSale = sale;
            }
            $scope.isQuantityModified = false;
        };

        $scope.isSaleShown = function (sale) {
            return $scope.shownSale === sale;
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

        $ionicModal.fromTemplateUrl('salesedit.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function (modal) {
            $scope.modal = modal;
        });
        $scope.openModal = function (sale) {
            $scope.sale = sale;
            $scope.modal.show();
        };
        $scope.closeModal = function () {
            $scope.modal.hide();
        };
        // Cleanup the modal when we're done with it!
        $scope.$on('$destroy', function () {
            $scope.modal.remove();
        });
        // Execute action on hide modal
        $scope.$on('modal.hidden', function () {
            // Execute action
        });
        // Execute action on remove modal
        $scope.$on('modal.removed', function () {
            // Execute action
        });

        $scope.addNewSale = function() {
            $state.go('home.salesaddcustomer');
        }

        $scope.addNewSaleForCustomer = function (key) {
            var keyArray = key.split(",");
            $state.go('home.salesadd', {nickname: keyArray[1]});
        }
    }]);