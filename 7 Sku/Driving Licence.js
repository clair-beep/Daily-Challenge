//solution
// PARAMETERS =>   you receive an array with the details of the individual who wants to issue his DL 

// RETURN => a string with the personal information of the driver, with the parameters psovided, everything has to be uppercase 

// EXAMPLES =>  

first example: 

["John","James","Smith","01-Jan-2000","M"] --> returns SMITH 0 01 01 0 JJ 9 AA

1–5: The first five characters of the surname (padded with 9s if less than 5 characters) 
--->  Smith
6: The decade digit from the year of birth (e.g. for 1987 it would be 8) 
---> 0
7–8: The month of birth (7th character incremented by 5 if driver is female i.e. 51–62 instead of 01–12)
--> 01 (male example)
9–10: The date within the month of birth 
---> 01
11: The year digit from the year of birth (e.g. for 1987 it would be 7)
--> 0
12–13: The first two initials of the first name and middle name, padded with a 9 if no middle name
--> jj
14: Arbitrary digit – usually 9, but decremented to differentiate drivers with the first 13 characters in common. We will always use 9
--> 9 
15–16: Two computer check digits. We will always use "AA"
--> AA

second  example: 

["Johanna","","Gibbs","13-Dec-1981","F"] --> GIBBS 8 62 13 1 J9 9 AA

1–5: The first five characters of the surname (padded with 9s if less than 5 characters) 
--->  Gibbs
6: The decade digit from the year of birth (e.g. for 1987 it would be 8) 
---> 8
7–8: The month of birth (7th character incremented by 5 if driver is female i.e. 51–62 instead of 01–12)
--> 62 (female example)
9–10: The date within the month of birth 
---> 13
11: The year digit from the year of birth (e.g. for 1987 it would be 7)
--> 1
12–13: The first two initials of the first name and middle name, padded with a 9 if no middle name
--> j9 (no middle name)
14: Arbitrary digit – usually 9, but decremented to differentiate drivers with the first 13 characters in common. We will always use 9
--> 9 
15–16: Two computer check digits. We will always use "AA"
--> AA
// // PSEUDO CODE =>  

a loop to evaluate the parametes of the array
create conditional to evaluate each scenario 
push the results to an arr
return a string uppercasing everything 


*/ 

function driver(data) {
  let drivingNumber = [];
  const year = (new Date(data[3])).getFullYear() + "";
  let month =   ((new Date(data[3])).getMonth() + 1)
  let date = (new Date(data[3])).getDate();
    if(data[2].length < 5 ) {
      let surname = data[2].toUpperCase() + '9'.repeat(5 -data[2].length);
      drivingNumber.push(surname) 
    } else {
      drivingNumber.push(data[2].slice(0, 5).toUpperCase())
    }
    if(data[4] == 'F'){
      drivingNumber.push(year[2], (month + 50 + '')) 
    } else {
    if(month > 9) {
      month = month.toString();
      drivingNumber.push(year[2], (month)) 
    } else {
      month = '0' + month.toString();
      drivingNumber.push(year[2], (month)) 
    }
  }
  if(date < 10)  {
    console.log(date)
    date = '0' + date.toString();
  drivingNumber.push(date, year[3]) 
  } else {
    drivingNumber.push(date.toString(), year[3]) 
  }
  if(data[1] == ''){
    drivingNumber.push((data[0].slice(0, 1)).toUpperCase() + '9' ) 
  } else {
    drivingNumber.push(data[0].slice(0, 1) + data[1].slice(0, 1)) 

  }
  drivingNumber.push('9AA')
  return drivingNumber.join('');
}

//alternative
function driver(data) {
    var birthDay = new Date(data[3]);
    
    return (data[2].toUpperCase()+"99999").slice(0,5)                              //1-5
            +  data[3].slice(-2,-1)                                                //6
            +  ("0"+(birthDay.getMonth() + (data[4] == "M" ? 1 : 51))).slice(-2)   //7-8
            +  ("0"+birthDay.getDate()).slice(-2)                                  //9-10
            +  data[3].slice(-1)                                                   //11
            +  data[0].slice(0,1)+(data[1]+"9").slice(0,1)                         //12-13
            +  "9AA";                                                              //14-16
  }