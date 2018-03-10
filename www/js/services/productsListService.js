angular.module('payMeLaterApp')
    .service('productsListService', function ($http) {    
        this.getProducts = function (cpf) {
            return $http({
                method: 'GET',
                url: 'https://selloncreditionic.herokuapp.com/Products/' + cpf
            });
        };
    });