/*
title: Consonant value



Description: Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".

We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.


Examples: 

For example, for the word "zodiacs", let's cross out the vowels. We get: "z o d ia cs"

-- The consonant substrings are: "z", "d" and "cs" and the values are z = 26, d = 4 and cs = 3 + 19 = 22. The highest is 26.
solve("zodiacs") = 26

For the word "strength", solve("strength") = 57
-- The consonant substrings are: "str" and "ngth" with values "str" = 19 + 20 + 18 = 57 and "ngth" = 14 + 7 + 20 + 8 = 49. The highest is 57.

Parameters:
you will receive onty one, that's fill with characters 

Return: 
return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".

Pseudo Code: 



*/ 

//solution 

function solve(s) {
    let arr = s.split('')
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let points = 0;
    let tempPoints = 0;
  
    for (let i = 0; i < arr.length; i++) {
      if(vowels.includes(arr[i])) {
        arr.splice(i, 1, '1')
      }
    }
  
    arr  = arr.join('').split('1')
  
    for (let j = 0; j < arr.length; j++) {
      if(tempPoints > points) {
        points = tempPoints
      }
      tempPoints = 0;
      if(arr[j] !== '') {
        let consonant = arr[j];
        for (let x = 0; x < consonant.length; x++) {
          tempPoints += consonant.charCodeAt(x) - 96
        }
      }
      if(tempPoints > points) {
        points = tempPoints
      }
    }
    return points;
  };
  
  
  // console.log(solve("chruschtschov"))//,80);
  console.log(solve("az"))//,26);
  // console.log(solve("khrushchev"))//,38);
  // console.log(solve("strength"))//,57);
  // console.log(solve("catchphrase"))//,73);
  // console.log(solve("twelfthstreet"))//,103);
  // console.log(solve("mischtschenkoana"))//,80);
  /*
  alternative 
  
  */
  function solve(s) {
    let arr = s.replace(/[aeiou]/gi, ' ')
               .split(' ')
               .filter(x => x != '')
               .map(x => x.split('')
                          .map(y => y.charCodeAt() - 96)
                          .reduce((a,b) => a + b ))
    return Math.max(...arr)
  };