//Solution

function stockList(listOfArt, listOfCat) {
  if (
    !listOfArt ||
    !listOfCat ||
    listOfArt.length === 0 ||
    listOfCat.length === 0
  ) {
    return '';
  }

  const obj = listOfCat.reduce(
    (acc, curr) => Object.assign(acc, { [curr]: 0 }),
    {},
  );

  for (let i = 0; i < listOfArt.length; i++) {
    let [code, quantity] = listOfArt[i].split(' ');
    let category = code[0];
    if (category in obj) {
      obj[category] += +quantity;
    }
  }

  const str = Object.entries(obj)
    .map(([key, value]) => `(${key} : ${value})`)
    .join(' - ');

  return str;
}

//alternative

function stockList(listOfArt, listOfCat) {
  if (listOfArt.length === 0 || listOfCat.length === 0) {
    return '';
  }

  const obj = {};

  for (let i = 0; i < listOfArt.length; i++) {
    const [category, quantityStr] = listOfArt[i].split(' ');
    const quantity = parseInt(quantityStr);

    if (listOfCat.includes(category[0])) {
      obj[category[0]] = obj[category[0]]
        ? obj[category[0]] + quantity
        : quantity;
    }
  }

  return listOfCat.map((cat) => `(${cat} : ${obj[cat] || 0})`).join(' - ');
}
