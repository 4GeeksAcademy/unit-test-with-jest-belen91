const sum = (a,b) => {
    return a + b
};

console.log(sum(7,3));

module.exports = { sum };

let euro = ""; 
let euroToYen  = 156.5;
let dollars = 1.07; 
let euroToGBP = 0.87; 


const fromEuroToDollar = (euro) => {
    return euro * 1.07; 
}
    