function isMajority(arr) {
    let majorityElement = null;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {

        if (count === 0) {
            majorityElement = arr[i];
            count = 1;
        } else {
            if (arr[i] === majorityElement) {
                count++;
            } else {
                count--;
            }
        }
    }

    let occurrences = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === majorityElement) {
            occurrences++;
        }
    }

    if(occurrences > arr.length / 2){
        console.log('This Array Contains a Majority which is', majorityElement)
    }
    else{
        console.log('The Array does not have a majority element')
    }
}

console.log(isMajority([3, 1, 3, 4, 4, 5, 3, 5, 3, 3, 3, 6, 3]));
console.log(isMajority([3, 1, 3, 4, 4]));
