const sum = (a,b) => {
    return a + b
};

console.log(sum(7,3));

const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * 1.07;
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar){
    let valueInYen = valueInDollar * 146.3;
    return valueInYen;  
}

const fromYenToPound = function(valueInYen){
    let valueInPound = valueInYen * 0.0056; 
    return valueInPound; 
}



module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };