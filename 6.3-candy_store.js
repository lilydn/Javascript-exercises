const candyStore = {
    candies: [
        {
            name: 'mint gum',
            id: 'as12f',
            price: 2,
            amount: 2
        },
        {
            name: 'twix',
            id: '5hd7y',
            price: 5,
            amount: 4
        },
    ],
    cashRegister: 200
}

/* should return the candy element with the specified id */
function getCandy(candyStore, id){
    return candyStore.candies.find(element => element.id === id);
}
//console.log(getCandy(candyStore, 'as2f'));


/* should return the price (number) of the candy with the specified id */
function getPrice(candyStore, id){ 
    return getCandy(candyStore, id) ? getCandy(candyStore, id).price : 'no such candy';
}
//console.log(getPrice(candyStore, '5hdy'));


/* should add a new candy to the candy list in candyStore with a
default amount of 1. The function will not return anything. */
function addCandy(candyStore, id, name, price){
    candyStore.candies.push({
        name: name,
        id: id,
        price: price,
        amount: 1
    })
}
//console.table(addCandy(candyStore, 'fry99', 'yum yum', 1));


/*  Implement the following buy function: The function should add the candy
price to the cashRegister, and decrease the amount property of the relevant
candy. */
function buy(candyStore, id){
    candy = getCandy(candyStore, id);
    if(candy.price) {
        candyStore.cashRegister += priceOfCandy;

    }
}