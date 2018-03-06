angular.module('payMeLaterApp')
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('login', {
        url: '/',
        views: {
          'login': {
            templateUrl: 'templates/login.html',
            controller: 'loginController'
          }
        }
      })
      .state('signup', {
        url: '/signup',
        views: {
          'login': {
            templateUrl: 'templates/signup.html',
            controller: 'signupController'
          }
        }
      })
      .state('home', {
        url: '/home',
        views: {
          'login': {
            templateUrl: 'templates/home.html'
          }
        }
      })
      .state('home.customerslist', {
        url: '/customers',
        views: {
          'menuContent': {
            templateUrl: 'templates/customerslist.html',
            controller: 'customersListController'
          }
        }
      })
      .state('home.customersadd', {
        url: '/add-customers',
        views: {
          'menuContent': {
            templateUrl: 'templates/customersadd.html',
            controller: 'customersAddController'
          }
        }
      });
    $urlRouterProvider.otherwise('/')
  });