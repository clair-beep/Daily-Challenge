// PARAMETERS => A STRING alphabets with digits or letters (both uppercase and lowercase)

// RETURN =>  the total amount if letters that repeated 

// EXAMPLES => 
// Example

// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice
// PSEUDO CODE => 
// make the string an Array
// count the total amount of times each letter was repeated
// loop through the object to find which one repeated 
// return the count 

//solution 

function duplicateCount(text){
    text = text.toLowerCase().split('');
    let count = 0; 
    let map = text.reduce((cnt, cur) => (cnt[cur] = cnt[cur] + 1 || 1, cnt), {});
    for (const key in map) {
        console.log(`${key}: ${map[key]}`);

        if(map[key] > 1){
            count++
        }
    }
    return count;
}

//alternative

function duplicateCount(text){
    var lower = text.toLowerCase();
    var count = 0;
    var used = [];
    
    lower.split('').forEach(function(letter) {
      if (!used.includes(letter) && (lower.split(letter).length - 1) > 1) {
        count++;
        used.push(letter);
      }
    });
    
    return count;
  }