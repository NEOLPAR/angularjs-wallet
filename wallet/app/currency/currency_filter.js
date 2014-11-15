'use strict';

angular.module('WalletApp.CurrencyView.currencyFilter',[])
  .filter('html',function($sce){
    return function(input){
      return $sce.trustAsHtml(input);
    }
  });
