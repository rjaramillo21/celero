'use strict';

var app = angular.module('caleroApp', ['pascalprecht.translate'])

app.config(function ($routeProvider) {
  $routeProvider
    .when('/main', {
      templateUrl: './views/main.html',
      controller: 'MainCtrl'
    })
    .when('/services',{
      templateUrl: './views/services.html',
      controller: 'MainCtrl'
    })
    .when('/support',{
      templateUrl: './views/support.html',
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
    .when('/faqs',{
      templateUrl: './views/faqs.html',
      controller: 'MainCtrl'
    })
    .otherwise({
      redirectTo: '/main'
    });
});
