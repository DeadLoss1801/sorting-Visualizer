import { swapping } from "./swap.js";


async function insertionSort(inputArr) {
    let n = inputArr.length;
    for (let i = 1; i < n; i++) {
        let current = inputArr[i];
        // The last element of our sorted subarray
        let j = i - 1;
        while ((j > -1) && (current < inputArr[j])) {
            inputArr[j + 1] = inputArr[j];
            j--;

        }
        inputArr[j + 1] = current;
        await swapping(i, j + 1)
    }
    return inputArr;
}

export { insertionSort }