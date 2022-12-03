//solution 

var number = function(busStops){
    let peopleIntoBus = 0;
    let peopleOut = 0;
   for(let i = 0; i < busStops.length; i++) {
     peopleIntoBus += busStops[i][0]
     peopleOut += busStops[i][1]
 
   }
   return peopleIntoBus - peopleOut
 }