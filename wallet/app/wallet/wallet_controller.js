'use strict';

angular.module('WalletApp.WalletView', [])
  .controller('WalletController', ['currencyService', function(currencyService){
      console.log("WalletController");

    console.log(currencyService.getAllCurrencies());

    currencyService.getUserCurrency()
      .then(function(allCurrencies){
        console.log("HECHO", allCurrencies);
      }, function(){
        console.log("ERROR");
      });

    currencyService.setUserCurrency(currencyService.getAllCurrencies()[2]).then(
      function(userCurrency){
        console.log("BIEN CAMBIADO", userCurrency);
      }, function(){
        console.log("MAL CAMBIADO");
      }
    );
    currencyService.setUserCurrency(currencyService.getAllCurrencies()[1]).then(
      function(userCurrency){
        console.log("BIEN CAMBIADO", userCurrency);
      }, function(){
        console.log("MAL CAMBIADO");
      }
    );
    currencyService.setUserCurrency(currencyService.getAllCurrencies()[0]).then(
      function(userCurrency){
        console.log("BIEN CAMBIADO", userCurrency);
      }, function(){
        console.log("MAL CAMBIADO");
      }
    );
  }]);