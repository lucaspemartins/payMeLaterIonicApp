angular.module('payMeLaterApp')
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    //quando for a pagina de cálculo
    .state('customerslist', {
      url: '/Customers',
      templateUrl: 'index.html',
      controller: 'customersListController'
    })
    .state('index', {
        url: '/',
        templateUrl: 'index.html',
        controller: 'customersListController'
      })
    $urlRouterProvider.otherwise('/')
});