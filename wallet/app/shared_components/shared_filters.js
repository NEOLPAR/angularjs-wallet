'use strict';

angular.module('WalletApp.sharedComponents.filters', [])
  .filter('dateFormat', ['$filter', function($filter) {
    var suffixes = ["th", "st", "nd", "rd"];
    return function(input) {
      var week = $filter('date')(input, 'EEEE');
      var day = parseInt($filter('date')(input, 'dd'));
      var month = $filter('date')(input, 'MMMM');
      var year = $filter('date')(input, 'yyyy');
      var relevantDigits = (day < 30) ? day % 20 : day % 30;
      var suffix = (relevantDigits <= 3) ? suffixes[relevantDigits] : suffixes[0];

      return week+' '+day+suffix+', '+month+' '+year;
    };
  }])
  .filter('html', ['$sce', function($sce){
    return function(input){
      return $sce.trustAsHtml(input);
    }
  }])
  //It represent the negative number -10.00 rather than (10.00)
  .filter('customCurrency', ["$filter", function ($filter) {
    return function(amount){
      var currency = $filter('currency');
      var currencySymbol = '';

      if(amount < 0){
        return currency(amount, currencySymbol).replace("(", "-").replace(")", "");
      }

      return currency(amount, currencySymbol);
    };
  }]);