var WPAngularStarter = angular.module('wp-angular-starter', [
  'ui.router',
  'ngResource',
  'pascalprecht.translate',
  'smart-table',
  'mgcrea.ngStrap',
  'toastr',
  'angular-loading-bar',
  'ui.select',
  'ng-backstretch',
  'ngCookies']);


angular.module('wp-angular-starter').config(function($stateProvider) {
  $stateProvider.state('front_page', {
    url: '/home',
    templateUrl: 'views/home.html',
    controller: 'HomeController'
  }).state('login_page', {
    url: '/login',
    templateUrl: 'views/login.html',
    controller: 'LoginController'
  }).state('register_page', {
    url: '/register',
    templateUrl: 'views/register.html',
    controller: 'RegisterController'
  });
  }).run(function($state) {
  $state.go('front_page');
});

angular.module('mainApp',['ngResource']);
