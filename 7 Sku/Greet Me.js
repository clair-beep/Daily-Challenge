// solution 

var greet = function (name) {
    name = name.toLowerCase()
    name = name[0].toUpperCase() + name.slice(1)
    return `Hello ${name}!`
};

//alternative

String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
}

var greet = function (name) {
    return "Hello " + name.capitalize() + "!";
};