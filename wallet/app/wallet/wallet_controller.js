'use strict';

angular.module('WalletApp.WalletView', [])
  .controller('WalletController', ['$scope', 'walletService', 'currencyService', function($scope, walletService, currencyService){
    console.log("WalletController");
    //TODO init load records
    //TODO save records
    var updateTotal = (function update(){
      $scope.totalAmount = walletService.getTotalAmount();
      return update;
    })();

    currencyService.getUserCurrency().then(function(userCurrency){
      $scope.currency = userCurrency;
    });

    $scope.addRecord = function(recordData){
      $scope.records = walletService.addRecord(recordData).getAllRecords();
      updateTotal();
    };


  }]);