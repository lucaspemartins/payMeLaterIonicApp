angular.module('payMeLaterApp')
    .service('customersDeleteService', function ($http) {
        this.deleteCustomer = function (vendor_cpf, customer_cpf) {
            var url = 'https://selloncreditionic.herokuapp.com/Customers/' + vendor_cpf + '/' + customer_cpf;
            return $http({
                method: 'DELETE',
                url: url
            });
        }
    });