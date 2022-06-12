//my solution 
function DNAtoRNA(dna) {
    return dna.split("").map(a => a == "T" ? "U": a).join("");
    
    }
//alternative
function DNAtoRNA(dna){
    return dna.replace(/T/g, 'U');
  }