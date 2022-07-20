function bringShingara (tk){
    var shingraPrice = 5;
    console.log('total taka' , tk);
    var totalShingra = tk/shingraPrice;
    // console.log(totalShingra);
    return totalShingra;
}

// bringShingara(120);

var money = 300;
var shingraQuantity = bringShingara(money);
console.log(shingraQuantity);