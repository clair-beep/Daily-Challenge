// ALTERNATIVE
function abbrevName(name){

    return name.split(' ').map(i => i[0].toUpperCase()).join('.')

}
//MY SOLUTION
function abbrevName(name){
    let newName = name
      .split(' ') // splits 'my-long-word' into array 
      .map(

        (name, index) => name[0].toUpperCase())
    return newName.toString().replace(',', '.');
  
  }