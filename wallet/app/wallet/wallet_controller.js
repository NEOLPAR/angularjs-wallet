'use strict';

angular.module('WalletApp.WalletView', [])
  .controller('WalletController', ['$scope', 'walletService', 'currencyService', function($scope, walletService, currencyService){
    console.log("WalletController");

    $scope.records = walletService.addRecord({add: true, date: new Date(), amount: 3}).getAllRecords();
    $scope.records = walletService.addRecord({add: false, date: new Date(), amount: 3}).getAllRecords();
    //TODO init load records
    //TODO save records
    $scope.totalAmount = walletService.getTotalAmount();

    currencyService.getUserCurrency().then(function(userCurrency){
      $scope.currency = userCurrency;
    });

    $scope.addRecord = function(recordData){
      $scope.records = walletService.addRecord(recordData).getAllRecords();
    };


  }]);