'use strict';

angular.module('WalletApp.WalletView.walletService', [])
  .factory('walletService', ['Record', function(Record){
    var _recordList = new Array();

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
      }
    };

    return walletManager;
  }]);
