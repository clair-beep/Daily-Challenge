// returns => Construct a product array Of same size Such That prod[i] is equal to The Product of all the elements of Arr[] except Arr[i]. 

// examples => productArray ({1,5,2}) ==> return {10,2,5}
// Explanation:

//     The first element 10 is the product of all array's elements except the first element 1

//     The second element 2 is the product of all array's elements except the second element 5

//     The Third element 5 is the product of all array's elements except the Third element 2.

//     examples =>productArray ({10,3,5,6,2}) return ==> {180,600,360,300,900}

//     Explanation:

//     The first element 180 is the product of all array's elements except the first element 10

//     The second element 600 is the product of all array's elements except the second element 3

//     The Third element 360 is the product of all array's elements except the third element 5

//     The Fourth element 300 is the product of all array's elements except the fourth element 6

//     Finally ,The Fifth element 900 is the product of all array's elements except the fifth element 2

// pseudo code => loop thorugh all the arr 
// for each turn, use reduce and - current arr 
// push result 
//return new arr 

function productArray(numbers){
    let product = [];
    for (let i = 0; i < numbers.length; i++) {
       let tempArr = numbers.filter((__, index) =>index !== i);
       product.push(tempArr.reduce((x, y) => x * y, 1));
    }
    return product;
  }

  //ALTERNATIVE

  function productArray(numbers){
    return numbers.map(x => numbers.reduce((a,b) => a * b) / x)
  }
