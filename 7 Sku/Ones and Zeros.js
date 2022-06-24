const binaryArrayToNumber = arr => {
    arr.forEach(element => {
        parseInt(element, 2);
    });
    return arr;
}