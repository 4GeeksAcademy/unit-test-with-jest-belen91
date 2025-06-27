const sum = (a,b) => {
    return a + b
};

console.log(sum(7,3));



const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * 1.07;
    return valueInDollar;
}

module.exports = { sum, fromEuroToDollar };