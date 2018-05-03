angular.module('payMeLaterApp')
    .service('salesDeleteService', function ($http) {
        this.deleteSale = function (vendor_cpf, product_cpf, date_time) {
            var url = 'https://selloncreditionic.herokuapp.com/Sales/' + vendor_cpf + '/' + product_cpf + '/' + date_time;
            return $http({
                method: 'DELETE',
                url: url
            });
        }
    });