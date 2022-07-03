//MY SOLUT)ON 

const twoOldestAges = (ages) => ages.sort((a, b) => a - b).slice(-2)
//ALTERNATIVE

function twoOldestAges(ages){
    let oldest = -Infinity;
    let second = -Infinity;
    
    for (let i = 0; i < ages.length; ++i)
    {
      if (ages[i] > oldest)
      {
        second = oldest;
        oldest = ages[i];
      }
      else if (ages[i] > second)
      {
        second = ages[i];
      }
    }
    
    return [second, oldest];
  }