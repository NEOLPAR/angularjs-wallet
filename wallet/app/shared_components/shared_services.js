'user strict';

angular.module('WalletApp.SharedServices', [])
  .factory("resetService", ['$location', '$rootScope', function($location, $rootScope){
    return function(){
      console.log("RESET");
      localStorage.clear();
      $location.path('/wallet');
      if (!$rootScope.$$phase) {
        $rootScope.$apply();
      }
    }
  }]);
