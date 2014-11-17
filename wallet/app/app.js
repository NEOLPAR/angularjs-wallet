'use strict';

var WalletApp = angular.module('WalletApp', [
  'ngRoute',
  'WalletApp.sharedComponents.services',
  'WalletApp.sharedComponents.filters',
  'WalletApp.sharedComponents.navDirective',
  'WalletApp.CurrencyView',
  'WalletApp.CurrencyView.CurrencyClass',
  'WalletApp.CurrencyView.currencyService',
  'WalletApp.CurrencyView.currencyDirective',
  'WalletApp.WalletView',
  'WalletApp.WalletView.walletService',
  'WalletApp.WalletView.RecordClass',
  'WalletApp.WalletView.addRecordDirective',
  'WalletApp.WalletView.recordListDirective',
  'WalletApp.WalletView.totalDirective'
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
        reset: function($location, currencyService, walletService){
          currencyService.resetUserCurrency();
          walletService.resetRecordList();
          $location.path('/currency');
        }
      }
    })
    .otherwise({
      redirectTo: '/wallet'
    });
}]);