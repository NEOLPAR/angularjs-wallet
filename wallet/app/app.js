'use strict';

var WalletApp = angular.module('WalletApp', [
  'ngRoute',
  'WalletApp.WalletView',
  'WalletApp.CurrencyView',
  'WalletApp.SharedServices',
  'WalletApp.CurrencyView.CurrencyClass',
  'WalletApp.CurrencyView.currencyService',
  'WalletApp.CurrencyView.currencyDirective'
]);

WalletApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/currency', {
      templateUrl: './app/currency/currency_template.html',
      controller: 'CurrencyController'
    })
    .when('/wallet', {
      templateUrl: './app/wallet/wallet_template.html',
      controller: 'WalletController',
      resolve: {
        checkCurrency: function($rootScope, $location, currencyService){
          currencyService.checkCurrency(
            function(exist){
              if(!exist){
                $location.path('/currency');
              }
            });
        }
      }
    })
    .when('/reset', {
      resolve: {
        reset: function($location, currencyService){
          currencyService.removeUserCurrency();
          $location.path('/currency');
        }
      }
    })
    .otherwise({
      redirectTo: '/wallet'
    });
}]);