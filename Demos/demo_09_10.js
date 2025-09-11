/*
PROBLEM
Write a function called arrayToObject.

- The function takes a 2D array as an argument.
    - Each sub-array contains two elements: a key and a value.
- Convert the 2D array into an object
    - Where the first element is the key and the second element is the value
- DO NOT USE: fromEntries
- Return the object

OUTPUT:
{
  title: 'Elden Ring',
  genre: 'RPG',
  developer: 'FromSoftware',
  releaseYear: 2022,
  platforms: [ 'PS5', 'Xbox Series X/S', 'Steam' ],
  rating: 9.5
}
*/

const eldenRing = [
    ['title', 'Elden Ring'],
    ['genre', 'RPG'],
    ['developer', 'FromSoftware'],
    ['releaseYear', 2022],
    ['platforms', ['PS5', 'Xbox Series X/S', 'Steam']],
    ['rating', 9.5]
];

const arrayToObject = (arr) => {
    const obj = {};
    for (let i = 0; i < arr.length; i++) {
        const key = arr[i][0];
        const value = arr[i][1];
        obj[key] = value;
    }
    return obj;
};

console.log(arrayToObject(eldenRing));
/*
PROBLEM
write a function called combineReviews.

- The function takes a game object as an argument.
- Use object destructuring to extract reviewers, scores and the rest of the properties
- Combine reviewers and scores into a new key called reviews
    - the reviews key should be an array of objects where each object has reviewer and score
- Return a new object
    - contains all the original properties, except reviewers and scores
    - contains a new reviews key

OUTPUT
combineReviews(game);
{
  title: 'Hollow Knight: Silksong',
  genre: 'Metroidvania',
  developer: 'Team Cherry',
  releaseYear: 2025,
  reviews: [
    { reviewer: 'IGN', score: 9.5 },
    { reviewer: 'GameSpot', score: 9.0 },
    { reviewer: 'Polygon', score: 8.5 }
  ]
}
*/

// example game object with reviewers and scores
const hollowKnight = {
    title: 'Hollow Knight: Silksong',
    genre: 'Metroidvania',
    developer: 'Team Cherry',
    releaseYear: 2025,
    reviewers: ['IGN', 'GameSpot', 'Polygon'],
    scores: [9.5, 9.0, 8.5]
};
// function to combine reviewers and scores for a game object
const combineReviews = (obj) => {
    const  {reviewers, scores, ...rest} = obj;
    // combine reviewers and scores into reviews array of objects
    const reviews = reviewers.map((reviewer, index) => {
        const score = scores[index];
        return {
            reviewer, score
        };
    })
    let returnObj = {...rest, reviews};
    return returnObj;
}
console.log(combineReviews(hollowKnight));
/*
ASYNC EXAMPLE
Imagine a breakfast menu where items are prepared at different times.

The goal of this example is to show how to handle tasks that take varying amounts
of real-world time using Promises, setTimeout, and async/await.
*/

// A menu object with various food items and their preparation times
const breakfastMenu = {
    coffee: {
        name: 'cold brew',
        time: 1000
    },
    oatmeal: {
        name: 'oatmeal with fruit',
        time: 3000
    },
    pancakes: {
        name: 'banana pancakes with syrup',
        time: 5000
    },
    scrambled_eggs: {
        name: 'scrambled eggs with two sides',
        time: 7000
    }
};
// Function to simulate making an order, returns a Promise
const makeOrder = (menu, item) => {
    return new Promise((resolve, reject) => {
        // look up the item in the menu
        const foodItem = menu[item];
        if (!foodItem) {
            return reject(new Error('Item not found'));
        }
        // simulate the time taken to prepare the food item
        setTimeout(() => {
            console.log(`${foodItem.name} is ready!`);
            resolve(foodItem);
            // resolve(`Your order for ${foodItem.name} is ready!`);  

        }, foodItem.time);
    });
};
// Async function to serve the order and handle success or failure
const serveOrder = async (menu, item) => {
    // Call makeOrder and handle the promise
    try {
        const order = await makeOrder(menu, item);
        console.log(`${order.name} is served!`);
    } catch (error) {
        console.error(error.message);
    }
};

const placeOrder = (menu, item) => {
    makeOrder(menu, item).then(() => {
        console.log(`${item} is ready!`);
    }).then(() => {
        console.log(`${item} is served!`);
    }).catch((error) => {
        console.error(error.message);
    });
};

const placeOrderAsync = async (menu, item) => {
    try {
        // const order = await makeOrder(menu, item);
        await serveOrder(menu, item);
        console.log(`All your orders have been prepared and served.`);
    } catch (error) {
        console.error(error.message);
    }
};
console.log('Welcome to the breakfast cafe!');
// console.log(makeOrder(breakfastMenu, 'coffee'));
// serveOrder(breakfastMenu, 'coffee');
// serveOrder(breakfastMenu, 'pancakes');
serveOrder(breakfastMenu, 'oatmeal');
// serveOrder(breakfastMenu, 'scrambled_eggs');
// serveOrder(breakfastMenu, 'avocado_toast'); // This will trigger an error for item not found
// console.log('Please wait while we prepare your order...');

placeOrderAsync(breakfastMenu, 'coffee');
// placeOrder(breakfastMenu, 'pancakes');