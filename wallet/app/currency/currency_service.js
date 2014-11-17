'use strict';

angular.module('WalletApp.CurrencyView.currencyService', [])
  .factory('currencyService', ['$q', 'Currency', function($q, Currency){
    var _currencyInstance;
    var checkCurrencyInstance = function(){
      if(!_currencyInstance){
        _currencyInstance = new Currency();
      }

      return _currencyInstance;
    };
    var _userCurrency = checkCurrencyInstance().getUserCurrency();

    var currencyManager = {
      checkCurrency: function(exist){
        var response = this.getUserCurrency().then(
          null,
          function(){
            exist(false);
          }
        );

        return response;
      },
      getAllCurrencies: function(){
        return checkCurrencyInstance().getCurrencies();
      },
      getUserCurrency: function(){
        var deferred = $q.defer();

        if(_userCurrency){
          deferred.resolve(_userCurrency);
        } else {
          deferred.reject();
        }
        return deferred.promise;
      },
      setUserCurrency: function(currency){
        var deferred = $q.defer();
        var _response = checkCurrencyInstance().setUserCurrency(currency);
        _userCurrency = currency;

        if(_response.name === _userCurrency.name){
          deferred.resolve(_userCurrency);
        } else {
          deferred.reject();
        }
        return deferred.promise;
      },
      resetUserCurrency: function(){
        _userCurrency = null;
        return _currencyInstance.removeUserCurrency();
      }
    };

    return currencyManager;
  }]);