angular.module('payMeLaterApp')
    .service('cpfByNicknameService', function ($http) {    
        this.getCpfByNickname = function (nickname) {
            return $http({
                method: 'GET',
                url: 'https://selloncreditionic.herokuapp.com/UserKey/' + nickname
            });
        };
    });