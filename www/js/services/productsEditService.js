angular.module('payMeLaterApp')
    .service('productsEditService', function ($http) {    
        this.editProduct = function (product) {
            return $http({
                method: 'PUT',
                url: 'https://selloncreditionic.herokuapp.com/Products/' + product.user_cpf + '/' + product.product_code,
                data: product
            });
        };
    });