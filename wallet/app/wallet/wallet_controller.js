'use strict';

angular.module('WalletApp.WalletView', [])
  .controller('WalletController', ['$scope', 'walletService', 'currencyService', function($scope, walletService, currencyService){
    console.log("WalletController");
    //TODO init load records
    //TODO save records
    var updateScope = (function update(){
      $scope.totalAmount = walletService.getTotalAmount();
      $scope.records = walletService.getAllRecords();
      currencyService.getUserCurrency().then(function(userCurrency){
        $scope.currency = userCurrency;
      });

      return update;
    })();

    $scope.addRecord = function(recordData){
      $scope.records = walletService.addRecord(recordData);
      updateScope();
    };


  }]);