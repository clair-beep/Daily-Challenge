//my solution
function switchItUp(number){
    switch(number){
      case 1:
        return number = "One";
        break;
      case 2:
        return number = "Two";
        break;
      case 3:
        return number = "Three";
        break;
      case 4:
        return number = "Four";
        break;
      case 5:
        return number = "Five";
        break;
      case 6:
        return number = "Six";
        break;
      case 7:
        return number = "Seven";
        break;
      case 8:
        return number = "Eight";
        break;
      case 9:
        return number = "Nine";
        break;
      case 0:
        return number = "Zero";
        break;
    
      default:
        return number = "not found";
        break;
     } 
    }
//ALTERNATIVE
switchItUp=n=>["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"][n]