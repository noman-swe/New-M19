var skyColor = 'white';

var phones = ['iphone','sumsung', 'xaomi', 'lg', 'htc'];

phones['2'] = 'Nothing';
console.log(phones);
phones.push('xaomi');

// check is exists
if(phones.indexOf('oppo') == -1){
    console.log('oppo is missing');
}

// check is avaliable
if(phones.indexOf('Nothing') != 1){
    console.log('Lg is available');
}

// while loop
var i = 0;
while(i < 19){
    console.log(i);
    if(i == 7){
        break;
    }
    i++;
}

// for loop
for(var i = 0; i <20; i++){
    if(i == 10){
        continue;
    }
    console.log(i);
}

for (var i = 0; i < phones.length; i++){
    var phone = phones[i];
    console.log(phone); 
}


// function
function addThreeNumbers (num1, num2, num3){
    var result = num1 + num2 + num3;
    return result;
}
var addition = addThreeNumbers(10, 20, 30);
console.log( 'addition of three numbers: ', addition);

// object 
var microPhone = {
    brand: 'lenovo',
    price: 2000,
    color: 'black'
}
microPhone.color = 'red'; //changing or updating
microPhone['price'] = 500; //updating
console.log(microPhone);