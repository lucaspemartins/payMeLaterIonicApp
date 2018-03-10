angular.module('payMeLaterApp')
    .service('signupService', function ($http) {    
        this.onSubmit = function (user) {
            return $http({
                method: 'POST',
                url: 'https://selloncreditionic.herokuapp.com/Users',
                data: user
            });
        };
    });