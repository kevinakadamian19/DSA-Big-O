/* 

1) Constant time: No matter the size of the crowd you only need to yell once every time to find out how many golden retreivers there are.  
2) Linear time: If going one by one, the input is directly correlated to time as the number of people determines how many ticks or moments we will ask

*/

//Constant time: it's an arithmetic function that just sees if dividing the input by 2 returns a remainder of 0.
function isEven(value) {
    if (value % 2 == 0) {
        return true;
    }
    else
        return false;
    }
}

//Polynomial time: since it's a nested loop, then the running time will be n to the power of 2 (number of nested loops)

function areYouHere(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        const el1 = arr1[i];
        for (let j = 0; j < arr2.length; j++) {
            const el2 = arr2[j];
            if (el1 === el2) return true;
        }
    }
    return false;
}

//Linear time because the running time it takes depends on the input size aka the array's length. Either that or it's constant time as it is an arthmetic function for accessing values in an array
function doubleArrayValues(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] *= 2;
    }
    return array;
}

//Linear time because the size of the array directly inputs the number of "ticks" that there are since it needs to evaluate every position at i.
function naiveSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return i;
        }
    }
}

//Polynomial time as it's a nested loop.
function createPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            console.log(arr[i] + ", " +  arr[j] );
        }
    }
}

//Constant time. Despite the input the size the amount of run time was the same due to the fact that it's adding a value to the array.
function compute(num) {
    let result = [];
    for (let i = 1; i <= num; i++) {

        if (i === 1) {
            result.push(0);
        }
        else if (i == 2) {
            result.push(1);
        }
        else {
            result.push(result[i - 2] + result[i - 3]);
        }
    }
    return result;
}

//Logarithmic time; the while loop indicates that each loop will cut down the input or problem size by half. This allows for a slow increase in run time as input size increases.
function efficientSearch(array, item) {
    let minIndex = 0;
    let maxIndex = array.length - 1;
    let currentIndex;
    let currentElement;

    while (minIndex <= maxIndex) {
        currentIndex = Math.floor((minIndex + maxIndex) / 2);
        currentElement = array[currentIndex];

        if (currentElement < item) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement > item) {
            maxIndex = currentIndex - 1;
        }
        else {
            return currentIndex;
        }
    }
    return -1;
}

//Constant time. No matter the input, the fact that we are accessing an array item is the same.
function findRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}


function isWhat(n) {
    if (n < 2 || n % 1 != 0) {
        return false;
    }
    for (let i = 2; i < n; ++i) {
        if (n % i == 0) return false;
    }
    return true;
}

