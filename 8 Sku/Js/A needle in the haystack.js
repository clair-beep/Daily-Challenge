//my solution 

function findNeedle(haystack) {
    const index = haystack.findIndex(stack => stack === "needle")
    return `found the needle at position ${index}`
   }

//alternative
function findNeedle(haystack) {
    return "found the needle at position " + haystack.indexOf("needle");
  }