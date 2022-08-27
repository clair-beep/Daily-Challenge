function alphabetWar(fight){
    let arr = fight.split('');
    let left = 0;
    let right = 0;
    for (let i = 0; i < arr.length; i++) {
      let letter = arr[i];
      switch (letter) {
        case "w":
          left += 4;
          break;
        case "p":
          left += 3;
          break;
        case "b":
          left += 2;
          break;
        case "s":
          left += 1;
          break;
        case "m":
          right += 4;
          break;
        case "q":
          right += 3;
          break;
        case "d":
          right += 2;
          break;
        case "z":
          right += 1;
          break;        
        default:
          console.log("I don't own a pet");
          break;
      }
    }
    if(left < right) {
      return 'Right side wins!'
    } else if (left > right){
      return 'Left side wins!'
    } else {
      return `Let's fight again!`
  
    }
  }

  //alternative 

  function alphabetWar(fight) {
    let score = 0;
    for (const letter of fight) {
        switch (letter) {
            case 'w': score -= 4; break;
            case 'p': score -= 3; break;
            case 'b': score -= 2; break;
            case 's': score -= 1; break;
            case 'm': score += 4; break;
            case 'q': score += 3; break;
            case 'd': score += 2; break;
            case 'z': score += 1; break;
        }
    }

    return score < 0 ? "Left side wins!" : score > 0 ? "Right side wins!" : "Let's fight again!";
}