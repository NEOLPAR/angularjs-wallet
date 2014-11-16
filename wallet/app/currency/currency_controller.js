'use strict';

angular.module('WalletApp.CurrencyView', [])
  .controller('CurrencyController', ['$location', '$scope', 'currencyService', function($location, $scope, currencyService){
    console.log("CurrencyController");

    $scope.currencies = currencyService.getAllCurrencies();

    $scope.chooseCurrency = function(currency){
      currencyService.setUserCurrency(currency).then(
        function(){
          $location.path('/wallet');
        }
      );
    }
  }]);
