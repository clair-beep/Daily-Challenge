PARAMETERS =>   an array with number or other types of data 

RETURN =>   The function should return the sum of the cubes of the initial values provided it will return undefined if any of the values aren't numbers.


EXAMPLES =>   [1, 2, 3, 4])   

odd numbers of this array are 1, 3

cube numbers are  

1 => 1

3  =>  27 

the sum of 27 and 1 is 28 

PSEUDO CODE =>   check if all inputs NUMS 
for only odd number get the cube
sum everyting 
return result 

*/
function cubeOdd(arr){
 let cubes = [];
 for (let i = 0; i < arr.length; i++) {
   if(typeof arr[i] !== 'number') {
     return undefined;
   } else {
     if(arr[i] % 2 !== 0)
     cubes.push(Math.pow(arr[i], 3))
   }
 }
 return cubes.reduce((previousValue, currentValue) => previousValue + currentValue, 0
 );
}

 
console.log(cubeOdd([1, 2, 3, 4]))//, 28);

 /* function cubeOdd(arr) {
    var sum = 0;
    for (var i = 0; i <arr.length; i++){
      var cubed = (arr[i]*arr[i]*arr[i]);
      if (isNaN(cubed)) return undefined;
      if(cubed % 2 != 0 )sum += cubed;
    }
    return sum;
  }

  */