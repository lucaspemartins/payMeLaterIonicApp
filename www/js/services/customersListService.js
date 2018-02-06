angular.module('payMeLaterApp')
    .service('customersListService', function($http){
        this.getCustomers = function(){
            $http({
                method: 'GET',
                url: 'https://selloncredit.herokuapp.com/Customers'
            }).then(function (success) {
                return success.data;
            }, function (error) {
                console.log("Error to invoke get service");
            });
        }
    })
/*     .factory('helloWorldService', function($http) {
        return {
         getCustomers: function() {
            return $http({
                method: 'GET',
                url: 'https://selloncredit.herokuapp.com/Customers'
            }).then(function (success) {
                $scope.customers = success.data;
            }, function (error) {
            
            });
         }
        }
       }) */
;