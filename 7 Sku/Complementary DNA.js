//solution 
function DNAStrand(dna){
    let arr = dna.split('')
    let result = []
    for (let index = 0; index < arr.length; index++) {
        if(arr[index] == 'A') {
            result.push('T')
        } else if  (arr[index] == 'G') {
            result.push('C')   
        } else if (arr[index] == 'T'){
            result.push('A')   

        } else {
            result.push('G') 
        }
  }
  return result.join('');

}
//alternative 

let pairs = {'A':'T','T':'A','C':'G','G':'C'};
const DNAStrand = (dna) => dna.split('').map((v) => pairs[v]).join('');