//my solution 
const  sayHello = ( name, city, state ) => {
    return `Hello, ${name.join(" ")}! Welcome to ${city}, ${state}!`
  }
//alternative
function sayHello( name, city, state ) {
    return 'Hello, ' + name.join(' ') + '! Welcome to ' + city + ', ' + state + '!';
  }
