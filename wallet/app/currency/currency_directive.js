'use strict';

angular.module('WalletApp.CurrencyView.currencyDirective', [])
  .directive("liCurrencyDir", [function(){
    return {
      restrict: 'E',
      templateUrl: './app/currency/currency_element.html',
      scope: {
        currencies: '=',
        choose: '&'
      },
      link: function(scope){
        scope.chooseCurrency = function(currency){
          scope.choose()(currency);
        }
      }
    }
  }]);
