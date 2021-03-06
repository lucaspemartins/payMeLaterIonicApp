angular.module('payMeLaterApp')
    .controller('productsListController', ['$scope', '$window', '$ionicModal', '$state', 'productsListService', 'productsEditService', function ($scope, $window, $ionicModal, $state, productsListService, productsEditService) {
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

        $scope.editProduct = function () {
            productsEditService.editProduct($scope.product)
                .then(function (success) {
                    $window.location.reload();
                }, function (error) {
                    console.log("Error to invoke get service");
                });
        };

        $ionicModal.fromTemplateUrl('customersedit.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function (modal) {
            $scope.modal = modal;
        });
        $scope.openModal = function (product) {
            $scope.product = product;
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
    }]);