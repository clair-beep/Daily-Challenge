function test (number){

    let currency = new Intl.NumberFormat("en-US", { 
      style: "currency",
      currency: "USD",})
      .format(number);
    
      return  currency.split(',').join('')
    
    } 


//alternative 

function formatMoney(amount){
    return '$' + amount.toFixed(2);
  }