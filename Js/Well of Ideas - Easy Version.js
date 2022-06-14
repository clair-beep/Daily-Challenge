//MY SOLUTION 
const well = x => {
    let bad = 0;
    let good = 0;
    x.filter(idea => idea == "bad" ? bad++ : good++ );
    if(good == 0) {
        return "Fail!";
    } else if(good > 2) {
        return 'I smell a series!';
    } else {
        return 'Publish!';
    }
};
//ALTERNATIVE
const well = x => {
    const good_count = x.filter(x => x == 'good').length;
    return good_count < 1 ? 'Fail!' : 
           good_count < 3 ? 'Publish!' : 'I smell a series!';
  }