angular.module('payMeLaterApp')
    .controller('salesAddCustomerController', ['$scope', '$window', '$ionicModal', '$state', '$stateParams', '$ionicPopup', 'productsListService', 'cpfByNicknameService', 'salesAddService', 'customersListService', function ($scope, $window, $ionicModal, $state, $stateParams, $ionicPopup, productsListService, cpfByNicknameService, salesAddService, customersListService) {
        $scope.vendor_cpf = JSON.parse($window.localStorage.getItem('vendor_cpf'));
        $scope.spinner = true;
        $scope.message = false;
        $scope.product = {
            product_name: '',
            product_version: '',
            product_code: '',
            price: '',
            user_cpf: ''
        };
        $scope.sale = {
            vendor_cpf: '',
            customer_cpf: '',
            products_id_product: '',
            products_product_code: '',
            products_product_version: '',
            quantity: '',
            date_time: ''
        };
        $scope.customer_cpf;
        $scope.customer_key;
        $scope.productName;
        $scope.code;
        $scope.version;
        $scope.id_product;
        $scope.quantity;

        $scope.getCpfByNickname = function (nickname) {
            cpfByNicknameService.getCpfByNickname(nickname)
                .then(function (success) {
                    $scope.customer_cpf = success.data[0].cpf;
                }, function (error) {
                    $scope.spinner = false;
                    console.log("Error to invoke get service");
                });
        }

        $scope.getNicknameFromCustomerKey = function(customer_key){
            var keyArray = customer_key.split(","); 
            return keyArray[1];
        }

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

        customersListService.getCustomers($scope.vendor_cpf)
            .then(function (success) {
                $scope.customers = success.data;
                $scope.spinner = false;
                if (success.data.length == 0) {
                    $scope.message = true;
                }
            }, function (error) {
                $scope.spinner = false;
                console.log("Error to invoke get service");
            });

        $scope.onSubmit = function () {
            $scope.sale.vendor_cpf = $scope.vendor_cpf;
            $scope.sale.customer_cpf = $scope.customer_cpf;
            $scope.sale.products_id_product = this.id_product.id_product;
            $scope.sale.products_product_code = this.code.product_code;
            $scope.sale.products_product_version = this.version.product_version;
            $scope.sale.quantity = this.quantity;
            var date = new Date();
            $scope.sale.date_time = date.toISOString();

            salesAddService.addSale($scope.sale)
                .then(function (success) {
                    $scope.spinner = false;
                    $scope.showAlert("Sale added successfully!");
                    $state.go("home.saleslist");
                }, function (error) {
                    $scope.spinner = false;
                    console.log("Error to invoke get service");
                });
        };

        $scope.onCustomerChange = function() {
            var nickname = $scope.getNicknameFromCustomerKey(this.customer_key);
            $scope.customerCpf = $scope.getCpfByNickname(nickname);
        }

        $scope.showAlert = function (message) {
            $ionicPopup.alert({
                title: 'Sale',
                content: message
            }).then(function (res) {
                console.log(message);
                $window.location.reload();
            });
        };
    }]);