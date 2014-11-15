'use strict';

angular.module('WalletApp.WalletView.RecordClass', [])
  .factory('Record', [function(){
    var Record = function(recordData){
      angular.extend(this, recordData);
    }

    return Record;
  }]);
