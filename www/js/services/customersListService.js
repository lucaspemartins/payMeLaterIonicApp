angular.module('payMeLaterApp')
    .service('customersListService', function($http){
        this.getCustomers = function(){
            return $http({
                method: 'GET',
                url: 'https://selloncredit.herokuapp.com/Customers'
            });
        }
    });