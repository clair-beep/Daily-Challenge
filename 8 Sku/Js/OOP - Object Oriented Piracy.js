// solution

function Ship(draft, crew) {
  this.draft = draft;
  this.crew = crew;
}

Ship.prototype.isWorthIt = function () {
  let weight = this.crew * 1.5;
  let totalWeight = this.draft - weight;
  return totalWeight > 20 ? true : false;
};

//alternative uysing ES6 modules

class Ship {
  constructor(draft, crew) {
    this.draft = draft;
    this.crew = crew;
  }

  isWorthIt() {
    let weight = this.crew * 1.5;
    let totalWeight = this.draft - weight;
    return totalWeight > 20;
  }
}

export default Ship;
