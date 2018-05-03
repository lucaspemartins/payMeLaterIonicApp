angular.module('payMeLaterApp')
    .service('salesAddService', function ($http) {    
        this.addSale = function (sale) {
            return $http({
                method: 'POST',
                url: 'https://selloncreditionic.herokuapp.com/Sales/',
                data: sale
            });
        };
    });