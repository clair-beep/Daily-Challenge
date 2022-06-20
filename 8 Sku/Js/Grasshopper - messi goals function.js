// // my solution
const  goals = (laLigaGoals, copaDelReyGoals, championsLeagueGoals) => laLigaGoals + copaDelReyGoals + championsLeagueGoals;
// // ALTERNATIVE
const goals = (...goalsArray) => goalsArray.reduce((a, b) => a + b);