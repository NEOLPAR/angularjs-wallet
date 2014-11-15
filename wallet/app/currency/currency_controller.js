'use strict';

angular.module('WalletApp.CurrencyView', [])
  .controller('CurrencyController', ['$location', '$scope', 'currencyService', function($location, $scope, currencyService){
    console.log("CurrencyController");

    $scope.currencies = currencyService.getAllCurrencies();

    $scope.chooseCurrency = function(currency){
      currencyService.setUserCurrency(currency).then(
        function(success){
          console.log("bien");
          $location.path('/wallet');
        },
        function(error){
          console.log("error");
        }
      );
    }
  }]);
