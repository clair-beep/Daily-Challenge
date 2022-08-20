//solution 
const noOdds = values => values.filter(num =>num % 2 == 0 );

//alternative 

function noOdds( values ){
    return values.filter(x => !(x % 2));
  }