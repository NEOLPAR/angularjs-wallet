'use strict';

angular.module('WalletApp.WalletView.walletService', [])
  .factory('walletService', ['Record', function(Record){
    var _recordList = new Array();
    var _totalAmount;
    var _calculateTotals = function(){
      var recordListLength = _recordList.length;
      var total = 0;

      for(var i = 0; i < recordListLength; i++){
        var record = _recordList[i];
        total += record.amount;
      }

      return total;
    }
    var _order = function(){ //TODO extra date order

    };

    var walletManager = {
      addRecord: function(recordData){
        var instance = new Record(recordData);

        _recordList.push(instance);

        return this;
      },
      getAllRecords: function(){
        return _recordList;
      },
      getTotalAmount: function(){
        if(!_totalAmount){
          _totalAmount = _calculateTotals();
        }

        return _totalAmount;
      }
    };

    return walletManager;
  }]);
