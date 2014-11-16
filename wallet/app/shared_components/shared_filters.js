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
  }]);