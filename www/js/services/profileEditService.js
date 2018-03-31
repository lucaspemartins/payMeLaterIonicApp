angular.module('payMeLaterApp')
    .service('profileEditService', function ($http) {    
        this.editProfile = function (cpf, user) {
            return $http({
                method: 'PUT',
                url: 'https://selloncreditionic.herokuapp.com/Users/' + cpf,
                data: user
            });
        };
    });