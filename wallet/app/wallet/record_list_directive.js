'use strict';

angular.module('WalletApp.WalletView.recordListDirective', [])
  .directive('recordListDir', ['currencyService', function(currencyService){
    return {
      restrict: 'E',
      templateUrl: './app/wallet/record_list_panel.html',
      scope: {
        records: '='
      },
      link: function(scope){
        currencyService.getUserCurrency().then(function(userCurrency){
          scope.currency = userCurrency;
        });
      }
    }
  }]);