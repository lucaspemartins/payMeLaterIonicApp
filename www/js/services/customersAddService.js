angular.module('payMeLaterApp')
    .service('customersAddService', function ($http) {    
        this.getPossibleCustomers = function (cpf) {
            return $http({
                method: 'GET',
                url: 'https://selloncreditionic.herokuapp.com/PossibleCustomers/' + cpf
            });
        };
        this.addCustomer = function(cpf, customerCpf) {
            return $http({
                method: 'POST',
                url: 'https://selloncreditionic.herokuapp.com/Customers/' + cpf + '/' + customerCpf
            });
        }
    });