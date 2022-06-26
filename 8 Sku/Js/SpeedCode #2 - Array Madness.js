// ALTERNATIVE
const arrayMadness = (a, b) => a.reduce((acc, x) => acc + x**2, 0) > b.reduce((acc, x) => acc + x**3, 0) 
//MY SOLUTION
function arrayMadness(a, b) {
    return a.reduce((previousValue, currentValue) => previousValue + currentValue ** 2, 0) > b.reduce((previousValue, currentValue) => previousValue + currentValue ** 3, 0);
    }