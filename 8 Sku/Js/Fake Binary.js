//alternative
function fakeBin(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
}
//SOLUTION
const fakeBin = x => x.split("").map(x => x >= 5 ?  1 :  0).join("").toString();