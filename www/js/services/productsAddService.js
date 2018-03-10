angular.module('payMeLaterApp')
    .service('productsAddService', function ($http) {    
        this.onSubmit = function (product, vendor_cpf) {
            return $http({
                method: 'POST',
                url: 'https://selloncreditionic.herokuapp.com/Products/' + vendor_cpf,
                data: product
            });
        };
    });