'use strict';

var app = angular.module('caleroApp', ['pascalprecht.translate'])

app.config(function ($routeProvider) {
  $routeProvider
    .when('/main', {
      templateUrl: './views/main.html',
      controller: 'MainCtrl'
    })
    .when('/features',{
      templateUrl: './views/features.html',
      controller: 'MainCtrl'
    })
    .when('/pricing',{
      templateUrl: './views/pricing.html',
      controller: 'MainCtrl'
    })
    .when('/contact_us',{
      templateUrl: './views/contact_us.html',
      controller: 'MainCtrl'
    })
    .when('/about_us',{
      templateUrl: './views/about_us.html',
      controller: 'MainCtrl'
    })
    .when('/team',{
      templateUrl: './views/team.html',
      controller: 'MainCtrl'
    })
    .when('/customers',{
      templateUrl: './views/customers.html',
      controller: 'MainCtrl'
    })
    .otherwise({
      redirectTo: '/main'
    });
});
