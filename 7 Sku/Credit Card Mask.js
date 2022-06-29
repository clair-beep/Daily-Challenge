//MY SOLUTION
function maskify(cc) {
    cc.split('');
    let save =[];
    if(cc.length <2){
    return cc;
        } else {
        for (let index = 0; index < cc.length - 4; index++) {
            save.splice(index, 0, '#');
            
        }
        for (let x = cc.length -4; x < cc.length; x++) {
            save.push(cc[x]);
            
        }
        }
    return save.join('');
    }
//ALTERNATIVE
// card numbers is good
function maskify(cc) {
    return cc.slice(-4).padStart(cc.length,'#')
  }