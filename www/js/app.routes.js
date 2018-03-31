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
            templateUrl: 'templates/home.html',
            controller: 'homeController'
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
      })
      .state('home.productslist', {
        url: '/products',
        views: {
          'menuContent': {
            templateUrl: 'templates/productslist.html',
            controller: 'productsListController'
          }
        }
      })
      .state('home.productsadd', {
        url: '/add-products',
        views: {
          'menuContent': {
            templateUrl: 'templates/productsadd.html',
            controller: 'productsAddController'
          }
        }
      })
      .state('home.profile', {
        url: '/profile',
        views: {
          'menuContent': {
            templateUrl: 'templates/profile.html',
            controller: 'profileController'
          }
        }
      })
    $urlRouterProvider.otherwise('/')
  });