//my solution 
function removeUrlAnchor(url) {
    const index = url.indexOf("#");

    return index === -1 ? url : url.slice(0, index);
}
//alternative
function removeUrlAnchor(url){
    return url.split('#')[0];
  }