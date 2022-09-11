//solution 

function dataReverse(data) {
    let arr = []
    for (let index = data.length; index > 0; index-=8) {
      arr.push(data.slice(index - 8, index).join(''));
      
    }
    return arr.join('').split('').map(x => parseInt(x))
  }

  //alternative

  const dataReverse = data => {

    const result = [];
  
    while(data.length){
      result.push(...data.splice(-8))
    }
  
    return result;
  }