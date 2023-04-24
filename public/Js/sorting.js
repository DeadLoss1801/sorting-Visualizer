
console.log('sorting.js');
import { bblSort } from "./bubble.js";
let new_array = document.getElementsByClassName('new-array')[0];

let bubble = document.getElementsByClassName('Bubble')[0];
// let insertion = document.getElementsByClassName('Insertion')[0];
// let selection = document.getElementsByClassName('Selection')[0];
// let merge = document.getElementsByClassName("Merge")[0];
// let quick = document.getElementsByClassName('Quick')[0];


let area = document.getElementsByClassName('content')[0];

console.log(area);
let arr = [];



new_array.addEventListener('click', () => {
    let size = document.getElementById('size');
    size = size.value;
    console.log(size);
    area.innerHTML = '';
    arr = [];

    for (let i = 0; i < size; i++) {
        arr.push(Math.floor(Math.random() * 101))

        let d = document.createElement('div');

        d.className = `bars bar_${i}`
        d.style.height = `${arr[i] / 4}rem`;
        d.style.width = `${500 / size}px`

        area.appendChild(d)
    }
})




bubble.addEventListener('click', async () => {
    await bblSort(arr);
})















// async function bblSort(arr) {

//     for (var i = 0; i < arr.length; i++) {
//         for (var j = 0; j < (arr.length - i - 1); j++) {

//             if (arr[j] > arr[j + 1]) {
//                 let temp = arr[j + 1];
//                 arr[j + 1] = arr[j];
//                 arr[j] = temp;

//                 await swapping(j);

//             }
//         }
//     }
// }

