angular.module('payMeLaterApp')
.controller('signupController', ['$scope', '$state', '$window', 'signupService', function($scope, $state, $window, signupService) {
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
        signupService.onSubmit($scope.user)
        .then(function (success) {
            $window.localStorage.setItem('vendor_cpf', JSON.stringify(success.data.cpf));
            alert("Signup successfully!" + JSON.stringify(success.data.cpf));
            $state.go("home.customerslist");
        }, function (error) {
            console.log("Error to invoke service");
        });
    };
}]);