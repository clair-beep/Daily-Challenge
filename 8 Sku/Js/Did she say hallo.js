function validateHello(greetings) {
  greetings = greetings.toLowerCase();
  let words = ['hello', 'ciao', 'salut', 'hallo', 'hola', 'ahoj', 'czesc'];
  const regex = new RegExp('\\b(' + words.join('|') + ')\\b', 'i');
  if (regex.test(greetings)) {
    return true;
  } else {
    return false;
  }
}

//Alternative

const hellos = {
  hello: 'english',
  ciao: 'italian',
  salut: 'french',
  hallo: 'german',
  hola: 'spanish',
  ahoj: 'czech republic',
  czesc: 'polish',
};

const validateHello = (greetings) => {
  for (key in hellos) {
    if (greetings.toLowerCase().includes(key)) {
      return true;
    }
  }
  return false;
};
