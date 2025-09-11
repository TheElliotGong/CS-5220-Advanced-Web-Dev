/* Problem 1
    Write a function called fulfillOrders
    This function takes two arguments:
        products: an array of objects with keys:
            name: the name of the product
            stock: the current stock quantity
        orders: an array of numbers
            assume these are in match the order of the product array
    The function should:
        - mutate the products array to subtract the order quantities
        - return a new array of objects with keys:
            name: the name of the product
            backordered: the amount that are backordered (not fulfilled) or 0 if fulfilled
*/

const fulfillOrders = (products, orders) => {
    // initialize array to store backorders
    const backorders = [];

    // loop over each product
    for (let i = 0; i < products.length; i++) {
        // current product
        const product = products[i];
        // corresponding order quantity
        const order = orders[i];

        // check if stock can fulfill the order
        if (product.stock >= order) {
            // reduce stock by subtracting order quantity
            product.stock -= order;
            // push in item with no backorder needed
            backorders.push({ name: product.name, backordered: 0 });
        } else {
            // push in item and calculate backordered amount
            backorders.push({ name: product.name, backordered: order - product.stock });
            // set stock to 0 after calculating backordered amount
            product.stock = 0;
        }
    }

    // return array of backorders
    return backorders;
};

// array of objects for products and their current store stock
const products = [
    { name: 'PS5 Pro', stock: 3 },
    { name: 'Xbox Series X', stock: 10 },
    { name: 'Switch 2', stock: 2 }
];

// array of ints for products and order quantity to be fulfilled
const orders = [7, 5, 1];

console.log('Stock Before');
console.log(products);

console.log('Backorders');
console.log(fulfillOrders(products, orders));

console.log('Stock After');
console.log(products);

/* Problem 2
    Write a function called censorMessage
    This function takes two arguments:
        message: a string containing a sentence
        banned: an array of strings representing banned words
    This function should:
        - Return the message by replacing every banned word with asterisks (*)

    Note:
        matching should be case-insensitive
        assume message contains no punctuation like commas or periods
*/

const censorMessage = (message, banned) => {
    // split message into an array of words
    const words = message.split(' ');

    // loop over each word in the array
    for (let i = 0; i < words.length; i++) {
        // current word
        let word = words[i];

        // check against each banned word
        for (let j = 0; j < banned.length; j++) {
            // replace with asterisks if it matches (case-insensitive)
            if (word.toLowerCase() === banned[j].toLowerCase()) {
                // replace current word with asterisks that are equal in length to the banned word
                word = '*'.repeat(banned[j].length);
            }
        }

        // update the word in array
        words[i] = word;
    }

    // join words back into a string
    return words.join(' ');
};

/*
 Refactored logic into a more modern JS approach which improve readability and simplicity.
 We are also making use a higher-order function (forEach) and array includes method.
 The runtime is essentially the same O(n * m).
*/
const censorMessageV2 = (message, banned) => {
    // split message into an array of words
    const words = message.split(' ');

    // loop over each word using the higher-order funtion
    words.forEach((word, idx) => {
        // use the array includes method to check if word is in the banned array
        if (banned.includes(word.toLowerCase())) {
            // replace current word with asterisks that are equal in length to the banned word
            words[idx] = '*'.repeat(word.length);
        }
    });

    // join words back into a string
    return words.join(' ');
};
// message string to censor for pizza order
const orderOne = 'I would like a pizza with pepperoni and cheese';
const orderTwo = 'I want a pineapple pizza';

// array of banned toppings on pizza :)
const banned = ['anchovies', 'pineapple', 'broccoli'];

console.log(censorMessage(orderOne, banned));
console.log(censorMessage(orderTwo, banned));

console.log(censorMessageV2(orderOne, banned));
console.log(censorMessageV2(orderTwo, banned));
