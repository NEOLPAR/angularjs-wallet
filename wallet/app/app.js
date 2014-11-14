'use strict';

var WalletApp = angular.module('WalletApp', [
  'ngRoute',
  'WalletApp.WalletView',
  'WalletApp.CurrencyView',
  'WalletApp.SharedServices',
  'WalletApp.CurrencyView.CurrencyClass',
  'WalletApp.currency.currencyService'
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
        checkCurrency: function(){
          //TODO: if !currency location currency
          console.log("wallet");
        }
      }
    })
    .when('/reset', {
      resolve: {
        reset: function(resetService){
          resetService();
        }
      }
    })
    .otherwise({
      redirectTo: '/wallet'
    });
}]);