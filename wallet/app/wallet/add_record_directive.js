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
        scope.recordClear = {
          add: true
        }

        var resetForm = (function reset() {
          scope.record = angular.copy(scope.recordClear);

          return reset;
        })();

        scope.addRecord = function(recordData){
          recordData.date = new Date();
          scope.add()(recordData);
          resetForm();
        }
      }
    };
  }]);