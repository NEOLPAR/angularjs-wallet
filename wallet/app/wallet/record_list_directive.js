'use strict';

angular.module('WalletApp.WalletView.recordListDirective', [])
  .directive('recordListDir', [function(){
    return {
      restrict: 'E',
      templateUrl: './app/wallet/record_list_panel.html',
      scope: {
        currency: '=',
        records: '='
      }
    }
  }]);