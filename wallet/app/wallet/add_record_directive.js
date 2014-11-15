'use strict';

angular.module('WalletApp.WalletView.addRecordDirective', [])
  .directive('addRecordDir', [function(){
    return {
      restrict: 'E',
      templateUrl: './app/wallet/add_record_panel.html',
      scope: {
        add: '&'
      },
      link: function(scope){
        scope.record = {
          add: true
        }
        scope.intener = {};
        scope.email = {};

        scope.addRecord = function(recordData){
          console.log(recordData);
          recordData.date = new Date();
          scope.add()(recordData);
        }
      }
    };
  }]);