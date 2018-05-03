angular.module('payMeLaterApp')
    .controller('loginController', ['$scope', '$window', '$state', '$ionicLoading', '$ionicPopup', 'loginService', function ($scope, $window, $state, $ionicLoading, $ionicPopup, loginService) {
        $scope.user = {
            email: '',
            password: ''
        };
        $scope.onLogin = function (form) {
            $scope.show();
            loginService.onLogin($scope.user)
                .then(function (success) {
                    if (success.data.length > 0) {
                        $window.localStorage.setItem('vendor_cpf', JSON.stringify(success.data[0].cpf));
                        $scope.hide();
                        $state.go("home.reports");
                    }
                    else {
                        $scope.hide();
                        $scope.showAlert("Email or password invalid. Try again");
                    }
                }, function (error) {
                    console.log("Error to invoke get service");
                });
        };
        $scope.show = function () {
            $ionicLoading.show({
                template: 'Loading...'
            }).then(function () {
                console.log("The loading indicator is now displayed");
            });
        };
        $scope.hide = function () {
            $ionicLoading.hide().then(function () {
                console.log("The loading indicator is now hidden");
            });
        };

        $scope.showAlert = function (message) {
            $ionicPopup.alert({
                title: 'Login',
                content: message
            }).then(function (res) {
                console.log(message);
                $window.location.reload();
            });
        };
    }]);