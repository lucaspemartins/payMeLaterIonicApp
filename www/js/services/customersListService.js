angular.module('payMeLaterApp')
    .service('customersListService', function ($http) {    
        this.getCustomers = function (cpf) {
            return $http({
                method: 'GET',
                url: 'https://selloncreditionic.herokuapp.com/Customers/' + cpf
            });
        };
    });