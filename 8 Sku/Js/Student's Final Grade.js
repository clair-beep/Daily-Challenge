//my solution 
function finalGrade (exam, projects) {
    if (exam > 90 || projects > 10) {
      return 100;
    } else if (exam > 75 && projects > 4){
      return 90;
    } else if (exam > 50 && projects > 1) {
      return 75;
    } else {
      return 0;  
    }
   
   }

   //alternative

   function finalGrade(exam, projects) {
    if (exam > 90 || projects > 10) return 100;
    if (exam > 75 && projects >= 5) return 90;
    if (exam > 50 && projects >= 2) return 75;
    return 0;
}