//solution
class Ball {
    constructor(ballType = 'regular') {
      this.ballType = ballType;
    }
  }
//alternative
var Ball = function(ballType) {
    this.ballType = ballType || 'regular';
  };