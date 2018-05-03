angular.module('payMeLaterApp')
    .controller('salesDeleteController', ['$scope', '$window', '$ionicPopup', '$state', 'salesDeleteService', function ($scope, $window, $ionicPopup, $state, salesDeleteService) {
        $scope.vendor_cpf = JSON.parse($window.localStorage.getItem('vendor_cpf'));

        $scope.deleteSale = function (sale) {
            salesDeleteService.deleteSale($scope.vendor_cpf, sale.customer_cpf, sale.date_time)
            .then(function (success) {
                var response = JSON.stringify(success);
                    if (response.indexOf("\"affectedRows\":1") > -1) {
                        $scope.showAlert("Sale was deleted with success!");
                        $state.go("home.saleslist");
                    }
                    else {
                        $scope.showAlert("Sale cannot be deleted!");
                        $state.go("home.saleslist");
                    }
            }, function (error) {
                $scope.spinner = false;
                console.log("Error to invoke get service");
            });
        };

        $scope.showAlert = function (message) {
            $ionicPopup.alert({
                title: 'Sales',
                content: message
            }).then(function (res) {
                console.log(message);
                $window.location.reload();
            });
        };
    }]);