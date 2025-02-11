
const selectionSort = (arr) => {

    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        debugger;
        // run one more loop from next to i i.e i+1 till the last number

        for (let j = i + 1; j < arr.length; j++) {
            // check if the item at minIndex is larger than the elem at j
            //  if yes then minIndex becomes j
            debugger;
            if (arr[minIndex] > arr[j]) {
                minIndex = j;

            }
        }
        // swap arr at i and minIndex
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    return arr;
}

console.log(selectionSort([1, 3, 4, 5]));
