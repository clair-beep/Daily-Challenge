function findDeletedNumber(arr, mixArr) {
    if(arr.length === mixArr.length) {
      return 0
    } else {
      let arrSum = arr.reduce((a,c) => a+c, 0)
      let mixSum = mixArr.reduce((a,c) => a +c, 0)
      return arrSum - mixSum
    }
  }

  //alternative

  function findDeletedNumber(arr, mixArr) {
    return arr.filter(v=>mixArr.indexOf(v)==-1)[0]||0
  }