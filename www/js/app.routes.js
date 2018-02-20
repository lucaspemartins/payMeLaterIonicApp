angular.module('payMeLaterApp')
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('index', {
        url: '/',
        templateUrl: 'index.html'
      })
      .state('customerslist', {
        url: '/customers',
        views: {
          'customers': {
            templateUrl: 'templates/customerslist.html',
            controller: 'customersListController'
          }
        }
      })
    $urlRouterProvider.otherwise('/')
  });