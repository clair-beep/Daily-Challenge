// solution 

function inArray(array1,array2){
    let arr = array2.join(" ")
    return array1.filter(item => arr.search(item) !== -1 && item !== undefined ).sort()
  }

  // alternative 

  function inArray(a1,a2){
    return a1.filter( sub => a2.some( whole => whole.includes(sub))).sort();
  }

  function inArray(a1, a2) {
    var str = a2.join(' ');
    return a1.filter(s => str.indexOf(s) !== -1).sort();
  }