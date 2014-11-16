'use strict';

angular.module('WalletApp.WalletView', [])
  .controller('WalletController', ['$scope', 'walletService', function($scope, walletService){
    console.log("WalletController");

    $scope.records = walletService.addRecord({add: true, date: new Date(), amount: 3}).getAllRecords();
    $scope.records = walletService.addRecord({add: false, date: new Date(), amount: 3}).getAllRecords();
    //TODO init load records
    //TODO save records
    $scope.addRecord = function(recordData){
      $scope.records = walletService.addRecord(recordData).getAllRecords();
    };


  }]);