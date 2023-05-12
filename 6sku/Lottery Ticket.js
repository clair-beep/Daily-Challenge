function bingo(ticket, win) {
  let miniWins = 0;

  for (let miniTicket of ticket) {
    const sentence = miniTicket[0];
    const jackpot = miniTicket[1];

    for (let index = 0; index < sentence.length; index++) {
      if (sentence.charCodeAt(index) === jackpot) {
        miniWins++;
        break;
      }
    }
  }
  if (miniWins >= win) {
    return 'Winner!';
  } else {
    return 'Loser!';
  }
}

//Alternative

function bingo(ticket, win) {
  var count = 0;

  ticket.forEach((game) => {
    if (game[0].includes(String.fromCharCode(game[1]))) {
      count++;
    }
  });

  return count >= win ? 'Winner!' : 'Loser!';
}
