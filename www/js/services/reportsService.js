angular.module('payMeLaterApp')
    .service('reportsService', function ($http) {    
        this.getSoldProducts = function (cpf) {
            return $http({
                method: 'GET',
                url: 'https://selloncreditionic.herokuapp.com/Reports/' + cpf
            });
        };
    });