angular.module('payMeLaterApp')
    .service('profileGetService', function ($http) {    
        this.getProfile = function (cpf) {
            return $http({
                method: 'GET',
                url: 'https://selloncreditionic.herokuapp.com/Users/' + cpf
            });
        };
    });