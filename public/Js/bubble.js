
import { swapping } from "./swap.js";


async function bblSort(arr) {

    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < (arr.length - i - 1); j++) {

            if (arr[j] > arr[j + 1]) {
                let temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;

                await swapping(j, j + 1);

            }
        }
    }
}

export { bblSort }




