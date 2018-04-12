angular.module('payMeLaterApp')
    .service('salesListService', function ($http) {    
        this.getSales = function (vendor_cpf) {
            return $http({
                method: 'GET',
                url: 'https://selloncreditionic.herokuapp.com/Sales/' + vendor_cpf
            });
        };
    });