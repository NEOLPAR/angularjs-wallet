'use strict';

angular.module('WalletApp.WalletView.walletService', [])
  .factory('walletService', ['Record', function(Record){
    var _recordList = new Array();
    var _totalAmount = {
      length: 0,
      total: 0
    };
    var _calculateTotals = function(){
      var recordListLength = _recordList.length;
      var length = 0;
      var total = 0;

      for(var i = 0; i < recordListLength; i++){
        var record = _recordList[i];
        length++;
        total = (record.add === true) ? total + record.amount : total - record.amount;
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
        //update only if it is necessary
        if(_totalAmount.length !== _recordList.length){
          _totalAmount.total = _calculateTotals();
        }

        return _totalAmount.total;
      }
    };

    return walletManager;
  }]);
