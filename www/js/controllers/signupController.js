angular.module('payMeLaterApp')
    .controller('signupController', ['$scope', '$state', '$window', '$ionicPopup', 'signupService', 'cpfValidateService', function ($scope, $state, $window, $ionicPopup, signupService, cpfValidateService) {
        $scope.user = {
            user_name: '',
            nickname: '',
            password: '',
            cpf: '',
            email: '',
            cellphone: '',
            telephone: ''
        };

        $scope.onSubmit = function () {
            var cpf = $scope.user.cpf;
            cpf = cpf.replace(new RegExp('-|\\.', 'g'), "");
            if (cpfValidateService.validateCpf(cpf)) {
                signupService.onSubmit($scope.user)
                    .then(function (success) {
                        $window.localStorage.setItem('vendor_cpf', JSON.stringify(success.data.cpf));
                        $scope.showAlert("Signup successfully!" + JSON.stringify(success.data.cpf));
                        $state.go("home.customerslist");
                    }, function (error) {
                        console.log("Error to invoke service");
                    });
            }
            else {
                $scope.showAlert();
            }
        };

        // An alert dialog
        $scope.showAlert = function () {
            var alertPopup = $ionicPopup.alert({
                title: 'Invalid CPF',
                template: 'Type a valid CPF'
            });
        };
    }]);