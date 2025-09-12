function letterMap(array)
{
    let obj = {};
    for (let i = 0; i < array.length; i++) {

        obj[array[i]] = array[i].length;
    }
    return obj;
}

console.log(letterMap(['iPhone', 'Galaxy', 'Pixel', 'Nokia'])
);

function numberPalindrome(x)
{
    if (typeof x !== 'number') {
        return 'Input is not a number';
    }
    let obj = {};
    obj['number'] = x;
    let str = x.toString();
    obj['isPalindrome'] = str == str.split('').reverse().join('') ? true : false;
    
    return obj;
}
console.log(numberPalindrome("hello"));
console.log(numberPalindrome(54145));
console.log(numberPalindrome(13475));

function groupTypes(array)
{
    let obj = {};
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
console.log(JSON.stringify(groupTypes([1, 'hello', true, 3.14, 'world', false, {"name": "viking", "weapon": "axe"}, 42])));

function weaveArrays(array1, array2)
{
    if(array1.length !== array2.length)
    {
        return 'Error: Arrays are not of the same length';
    }
    let result = [];
    for(let i = 0; i < array1.length; i++)
    {
        result.push(array1[i]);
        result.push(array2[i]);
    }
    return result;
}

console.log(weaveArrays([1,2,3], ['one', 'two', 'three']));
console.log(weaveArrays([1,2], ['one', 'two', 'three']));

function summarizeOrders(orders)
{
    let summary = {};
    summary["orders"] = [];
    let totalTip = 0, totalRating = 0; 
    for(let order of orders)
    {
        let orderDetails = order.split(',');
        summary["orders"].push({
            "restaurant": orderDetails[0],
            "cost": orderDetails[1],
            "tip": parseInt(orderDetails[2]),
            "rating": parseFloat(orderDetails[3])
        });
        //Gradually calculate total tip and rating
        totalTip += parseInt(orderDetails[2]);
        totalRating += parseFloat(orderDetails[3]);
    }
    //Calculate average tip and rating and add to summary
    summary["tipTotal"] = totalTip;
    summary["averageRating"] = totalRating/orders.length;
    return summary;

}

console.log(JSON.stringify(summarizeOrders([
  "Panda Express,15.50,3,5",
  "Chipotle,12.75,2,5",
  "Subway,,1,4",
  "Shake Shack,18,4,4"
])));