angular.module('payMeLaterApp')
    .service('loginService', function ($http) {
        this.onLogin = function (user) {
            var url = 'https://selloncreditionic.herokuapp.com/Login/';
            url = url + (user.email ? user.email + "/": "dummyuser/") + (user.password ? user.password + "/": "dummypass/");
            return $http({
                method: 'GET',
                url: url
            });
        }
    });