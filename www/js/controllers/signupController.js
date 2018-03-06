angular.module('payMeLaterApp')
.controller('signupController', ['$scope', function($scope) {
    $scope.user = {
        username: '',
        nickname: '',
        password: '',
        cpf: '',
        email: '',
        cellphone: '',
        telephone: ''
    };
    $scope.onSubmit = function () {
        alert('Teste')
    };
}]);