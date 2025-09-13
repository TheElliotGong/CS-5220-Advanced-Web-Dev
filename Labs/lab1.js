//This function takes an array of strings and returns an object mapping each string to its length
function letterMap(array)
{
    //Create an object to hold the result
    let obj = {};
    //Iterate through the array and add each string and its length to the object
    for (let i = 0; i < array.length; i++) {

        obj[array[i]] = array[i].length;
    }
    return obj;
}
//Test the letterMap function.
console.log(letterMap(['iPhone', 'Galaxy', 'Pixel', 'Nokia'])
);
//This function checks if a number is a palindrome and returns an object with the number and a boolean indicating if it's a palindrome
function numberPalindrome(x)
{
    //Check if input is a number
    if (typeof x !== 'number') {
        return 'Input is not a number';
    }
    //Create an object to hold the result
    let obj = {};
    obj['number'] = x;
    let str = x.toString();
    obj['isPalindrome'] = str == str.split('').reverse().join('') ? true : false;
    
    return obj;
}
//Test the numberPalindrome function
console.log(numberPalindrome("hello"));
console.log(numberPalindrome(54145));
console.log(numberPalindrome(13475));
//This function takes an array and groups its elements by their type, returning an object with types as keys and arrays of elements as values
function groupTypes(array)
{
    let obj = {};
    //Iterate through the array and group elements by their type
    for(let item of array)
    {
        let type = typeof item;
        if(!obj[type])
        {
            obj[type] = [];
        }
        obj[type].push(item);
    }
    return obj;
}
//Test the groupTypes function
console.log(JSON.stringify(groupTypes([42, 'tiger', true, 'lemur', -7, false, { animal: 'emu' }, 99, { animal: 'giraffe' }])));
//This function takes two arrays of the same length and weaves them together, returning a new array with elements from both arrays alternating
let weaveArrays = (array1, array2) =>
{
    //Check if arrays are of the same length
    if(array1.length !== array2.length)
    {
        return 'Error: Arrays are not of the same length';
    }
    //Loop through both arrays and add elements to the result array in an alternating fashion.
    let result = [];
    for(let i = 0; i < array1.length; i++)
    {
        result.push(array1[i]);
        result.push(array2[i]);
    }
    return result;
};
//Test the weaveArrays function
console.log(weaveArrays([1,3,5], [2, 4, 6]));
console.log(weaveArrays([1,2], ['one', 'two', 'three']));
//This function takes an array of order strings and returns a summary object with details about the orders, total tip, and average rating
let summarizeOrders = (orders) =>
{
    let summary = {};
    summary["orders"] = [];
    let totalTip = 0, totalRating = 0; 
    //Iterate through the orders and extract details. Make sure to handle "null" values appropriately.
    for(let order of orders)
    {
        let orderDetails = order.split(',');
        summary["orders"].push({
            "restaurant": orderDetails[0],
            "cost": typeof(parseInt(orderDetails[1])) == "number" ? parseInt(orderDetails[1]) : "null",
            "tip": typeof(parseInt(orderDetails[2])) == "number" ? parseInt(orderDetails[2]) : "null",
            "rating": typeof(parseFloat(orderDetails[3])) == "number" ? parseFloat(orderDetails[3]) : "null"
        });
        //Gradually calculate total tip and rating if they're actually numbers.

        if(!isNaN(parseInt(orderDetails[2])))
        {
            totalTip += parseInt(orderDetails[2]);
        }
        if(!isNaN(parseFloat(orderDetails[3])))
        {
            totalRating += parseFloat(orderDetails[3]);
        }

    }
    //Calculate average tip and rating and add to summary
    summary["tipTotal"] = totalTip;
    summary["averageRating"] = totalRating/orders.length;
    return summary;

};
//Test the summarizeOrders function
console.log(JSON.stringify(summarizeOrders([
  "Panda Express,15.50,3,5",
  "Chipotle,12.75,2,5",
  "Subway,,1,4",
  "Shake Shack,18,4,4"
])));