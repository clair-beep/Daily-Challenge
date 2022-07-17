//SOLUTION 

var numberToMoney = function(n) {
    return (Math.trunc(n*100)/100).toLocaleString()
  };