angular.module('payMeLaterApp')
    .controller('loginController', ['$scope', '$window', '$state', 'loginService', function ($scope, $window, $state, loginService) {
        $scope.user = {
            email: '',
            password: ''
        };
        $scope.onLogin = function () {
            alert('Login');
            loginService.onLogin($scope.user)
                .then(function (success) {
                    if (success.data.length > 0){
                        $window.localStorage.setItem('vendor_cpf', JSON.stringify(success.data[0].cpf))
                        $state.go("home");
                    }
                    else {
                        alert("Email or password invalid. Try again");
                        document.getElementById('email').value='';
                        document.getElementById('password').value='';
                        $scope.loginForm.email.$setValidity("reason", false);
                        $scope.user.password.$setValidity("reason", false);
                    }
                }, function (error) {
                    console.log("Error to invoke get service");
                });
        };
        $scope.onGoogleLogin = function () {
            alert('Google Login');
            window.open('https://plus.google.com/', 'blank', 'location=no');
        };
    }]);