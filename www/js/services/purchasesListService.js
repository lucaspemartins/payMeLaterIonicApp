angular.module('payMeLaterApp')
    .service('purchasesListService', function ($http) {    
        this.getPurchases = function (customer_cpf) {
            return $http({
                method: 'GET',
                url: 'https://selloncreditionic.herokuapp.com/Purchases/' + customer_cpf
            });
        };
    });