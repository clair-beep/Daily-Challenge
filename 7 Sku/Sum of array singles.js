// solution
function repeats(arr){
    return arr
            .filter(n =>  arr.indexOf(n) === arr.lastIndexOf(n))
            .reduce((acc, cur) => acc += cur)
   
};
// alternative 
const repeats = (arr) => [0,...arr].
                reduce((acc,el,_,arr) => arr.
                filter(e=> e === el).
                length < 2 ? acc + el : acc)