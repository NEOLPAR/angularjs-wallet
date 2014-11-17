'use strict';

angular.module('WalletApp.WalletView', [])
  .controller('WalletController', ['$scope', 'walletService', 'currencyService', function($scope, walletService, currencyService){
    var updateScope = (function update(){
      $scope.totalAmount = walletService.getTotalAmount();
      $scope.records = walletService.getAllRecords();
      currencyService.getUserCurrency().then(function(userCurrency){
        $scope.currency = userCurrency;
      });

      return update;
    })();
    $scope.wrapperId = "wallet";
    $scope.addRecord = function(recordData){
      walletService.addRecord(recordData).then(
        function(records){
          $scope.records = records;
          updateScope();
        },
        function(){
          //TODO alert directive
          alert("The wallet must be always positive amount.");
        }
      );
    };


  }]);