'use strict';

angular.module('WalletApp.CurrencyView.CurrencyClass', [])
  .factory('Currency', [function(){
    var Currency = function(){};
    var _possibleCurrencies = [{
            name: "gbp",
            sign: "&pound;"
          },{
            name: "euro",
            sign: "&euro;"
          },{
            name: "dollar",
            sign: "&dollar;"
          }];
    var _ls = "WalletApp.userCurrency";
    var _checkCurrency = function (currency){
      return _possibleCurrencies.indexOf(currency) !== -1;
    }

    Currency.prototype = {
      getCurrencies: function(){
        return _possibleCurrencies;
      },
      setUserCurrency: function(currency){
        if(_checkCurrency(currency)){
          localStorage.setItem(_ls, JSON.stringify(currency));
        }

        return this.getUserCurrency();
      },
      getUserCurrency: function(){
        var _userCurrency = localStorage.getItem(_ls);
        if(_userCurrency){
          return JSON.parse(_userCurrency);
        }
      },
      removeUserCurrency: function(){
        localStorage.removeItem(_ls);

        return true;
      }
    };

    return Currency;
  }]);