'use strict';

angular.module('WalletApp.WalletView.walletService', [])
  .factory('walletService', ['$q', 'Record', function($q, Record){
    var _totalAmount = {
      length: 0,
      total: 0
    };
    var _ls = 'WalletApp.recordList';
    var _recordList = JSON.parse(localStorage.getItem(_ls)) || new Array();

    var _calculateTotals = function(recordList){
      var recordListLength = recordList.length;
      var length = 0;
      var total = 0;

      for(var i = 0; i < recordListLength; i++){
        var record = recordList[i];
        length++;
        total = (record.add === true) ? total + record.amount : total - record.amount;
      }
      return total;
    }
    var _order = function(){ //TODO extra date order

    };
    var _save = function(){
      localStorage.setItem(_ls, JSON.stringify(_recordList));
    };

    var walletManager = {
      addRecord: function(recordData){
        var deferred = $q.defer();
        var instance = _recordList.slice(0);

        instance.push(new Record(recordData));

        if(_calculateTotals(instance) >= 0){
          _recordList = instance;
          _save();
          deferred.resolve(_recordList);
        }else{
          deferred.reject();
        }

        return deferred.promise;
      },
      getAllRecords: function(){
        return (_recordList);
      },
      getTotalAmount: function(){
        //update only if it is necessary
        if(_totalAmount.length !== _recordList.length){
          _totalAmount.total = _calculateTotals(_recordList);
        }

        return _totalAmount.total;
      },
      resetRecordList: function(){
        localStorage.removeItem(_ls);
        _recordList = new Array();
        _totalAmount = {
          length: 0,
          total: 0
        };
      }
    };

    return walletManager;
  }]);
