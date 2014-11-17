'use strict';

angular.module('WalletApp.sharedComponents.navDirective', [])
  .directive('navDir', [function(){
    return {
      restrict: 'E',
      templateUrl: './app/shared_components/nav_panel.html',
      link: function(scope){
        scope.navActive = false;

        scope.toggleNav = function(){
          scope.navActive = !scope.navActive;
        };
      }
    }
  }]);