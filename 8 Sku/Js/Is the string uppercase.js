//MY SOLUTION
String.prototype.isUpperCase = function() {
    return String(this) === this.toUpperCase()
    }
//ALTERNATIVE
String.prototype.isUpperCase = function() {
    return this.toUpperCase() === this.toString();
  }