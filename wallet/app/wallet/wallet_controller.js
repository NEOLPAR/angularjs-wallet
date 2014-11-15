'use strict';

angular.module('WalletApp.WalletView', [])
  .controller('WalletController', ['$scope', 'walletService', function($scope, walletService){
    console.log("WalletController");

    $scope.records = walletService.addRecord({add: 1, date: 2, amount: 3}).getAllRecords();

    $scope.addRecord = function(recordData){
      $scope.records = walletService.addRecord(recordData).getAllRecords();
    };


  }]);