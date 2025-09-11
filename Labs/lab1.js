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
        console.log('Input is not a number');
        return null;
    }
    let obj = {};
    obj['number'] = x;
    let str = x.toString();
    obj['isPalindrome'] = str == str.split('').reverse().join('') ? true : false;
    
    return obj;
}
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