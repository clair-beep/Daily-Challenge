//MY SOLUTION
function countDevelopers(list) {
    return list.filter(european => (european.continent === 'Europe' && european.language === 'JavaScript')).length;
    }
//ALTERNATIVE
function countDevelopers(list) {
    return list.filter(x=>x.continent=='Europe'&&x.language=='JavaScript').length
  }
