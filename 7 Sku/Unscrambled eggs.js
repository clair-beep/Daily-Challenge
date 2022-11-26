//solution
const unscrambleEggs = word => word.split('egg').join('')

//altertive 

function unscrambleEggs(word){
    return word.replace(/egg/ig, '')
  }