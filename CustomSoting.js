let sorted = [];

function sortDescending(arr) {
    let greatNum = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > greatNum) {
            greatNum = arr[i];
        }
    }

    sorted.push(greatNum);

    let indexToRemove = arr.indexOf(greatNum);
    arr.splice(indexToRemove, 1);

    if (arr.length > 0) {
        sortDescending(arr);
    }
}

function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function customSort(arr) {
    sorted = [];
    let nonPrimes = [];
    for (let i = 0; i < arr.length; i++) {
    if (!isPrime(arr[i])) {
        nonPrimes.push(arr[i]);
    }
}
    sortDescending(nonPrimes);
    return sorted;
}

let array = [7, 4, 6, 3, 6, 8, 2, 3,32,27,23,43,56];
let sortedArray = customSort(array);
console.log("Sorted Array:", sortedArray);
