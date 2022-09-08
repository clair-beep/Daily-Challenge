// solution 

function wave(str){
    let arr = str.split('')
    let mexicanWave = []
      for (let i = 0; i < arr.length; i++) {
        if(arr[i] !== ' ') {
          const word =   arr.map((word, index) => index ==  i ?  word.toUpperCase(): word.toLowerCase()).join('')
          mexicanWave.push(word)
         }
        }
    return mexicanWave;
    
      }

// alternative 

function wave(str){
    let newArr = [];
    for (let i = 0; i < str.length; i++) {
      let copy = str.split('');
      if(copy[i] !== ' ') {
      copy[i] = copy[i].toUpperCase()
      newArr.push(copy.join(''))
      }
    }
    return newArr
  }