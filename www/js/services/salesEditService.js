angular.module('payMeLaterApp')
    .service('salesEditService', function ($http) {    
        this.editSale = function (sale) {
            return $http({
                method: 'PUT',
                url: 'https://selloncreditionic.herokuapp.com/Sales',
                data: sale
            });
        };
    });