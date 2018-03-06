angular.module('payMeLaterApp')
    .service('customersRedirectService', function($state){
        $scope.redirectCustomersList = function(){
            return $state.go = "../../templates/customerslist.html"; 
        }
    });