'use strict';

angular.module('WalletApp.WalletView.totalDirective', [])
  .directive('totalDir', [function(){
    return {
      restrict: 'E',
      templateUrl: './app/wallet/total_panel.html',
      scope: {
        totalAmount: '=',
        currency: '='
      }
    }
  }]);