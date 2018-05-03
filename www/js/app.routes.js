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
      .state('home.saleslist', {
        url: '/sales',
        views: {
          'menuContent': {
            templateUrl: 'templates/saleslist.html',
            controller: 'salesListController'
          }
        }
      })
      .state('home.salesadd', {
        url: '/add-sales/?nickname',
        views: {
          'menuContent': {
            templateUrl: 'templates/salesadd.html',
            controller: 'salesAddController'
          }
        }
      })
      .state('home.salesaddcustomer', {
        url: '/add-sales',
        views: {
          'menuContent': {
            templateUrl: 'templates/salesaddcustomer.html',
            controller: 'salesAddCustomerController'
          }
        }
      })
      .state('home.purchases', {
        url: '/purchases',
        views: {
          'menuContent': {
            templateUrl: 'templates/purchaseslist.html',
            controller: 'purchasesListController'
          }
        }
      })
      .state('home.reports', {
        url: '/reports',
        views: {
          'menuContent': {
            templateUrl: 'templates/reports.html',
            controller: 'reportsController'
          }
        }
      })
    $urlRouterProvider.otherwise('/')
  });