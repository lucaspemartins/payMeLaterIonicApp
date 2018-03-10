angular.module('payMeLaterApp')
    .service('productsDeleteService', function ($http) {
        this.deleteProduct = function (vendor_cpf, product_cpf) {
            var url = 'https://selloncreditionic.herokuapp.com/Products/' + vendor_cpf + '/' + product_cpf;
            return $http({
                method: 'DELETE',
                url: url
            });
        }
    });