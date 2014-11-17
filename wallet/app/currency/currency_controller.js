'use strict';

angular.module('WalletApp.CurrencyView', [])
  .controller('CurrencyController', ['$location', '$scope', 'currencyService', function($location, $scope, currencyService){
    $scope.wrapperId = "currency";
    $scope.currencies = currencyService.getAllCurrencies();
    currencyService.getUserCurrency().then(function(userCurrency){
      $scope.userCurrency = userCurrency;
    });

    $scope.chooseCurrency = function(currency){
      currencyService.setUserCurrency(currency).then(
        function(){
          $location.path('/wallet');
        }
      );
    }
  }]);
