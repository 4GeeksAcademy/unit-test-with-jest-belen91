const { sum } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14,9); 
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    const { fromEuroToDollar } = require('./app.js');
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
    expect(dollars).toBe(expected); 
});

test("One dollar should be 146.3 yens", function() {
    const { fromDollarToYen } = require('./app.js');
    const yens = fromDollarToYen (3.5);
    const expected = 3.5 * 146.3;
    expect(yens).toBe(expected); 
});

test("One yen should be 0.0056 libras", function() {
    const { fromYenToPound } = require('./app.js');
    const pounds = fromYenToPound(3.5);
    const expected = 3.5 * 0.0056;
    expect(pounds).toBe(expected); 
});

test("fromEuroToDollar con string devuelve NaN", function() {
    const { fromEuroToDollar } = require('./app.js');
    const dollar = fromEuroToDollar("cinco");
    const expected = NaN; 
    expect(dollar).toBe(expected); 
});

test("fromYenToPound con undefined devuelve NaN", function(){
    const {fromYenToPound} = require('./app.js');
    const pounds = fromYenToPound(undefined); 
    const expected = NaN; 
    expect(pounds).toBe(expected);  
});

test("fromEuroToDollar con 0 debe devolver 0", function(){
    const { fromEuroToDollar } = require('./app.js');
    const dollar = fromEuroToDollar(0); 
    const expected = 0; 
    expect(dollar).toBe(expected);
}); 
