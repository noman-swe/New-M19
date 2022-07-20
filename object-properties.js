var computer = {
    price: 474185,
    storage: '256gb',
    color: 'silver',
    processor: 'intel i5'
}

// console.log(computer);
console.log(computer.processor);

// object property can take in a variable 
var computerPrice = computer.price;
console.log(computerPrice);

//rule-1: set a object property value
computer.price = 10000;


// rule-2: different ways to set a value of an object property
computer.price = 2222;
computer['price'] = 5555;

//Rule-3: another way by declaring a variable
var colorProperty = 'color';
computer[colorProperty] = 'red';


console.log(computer);