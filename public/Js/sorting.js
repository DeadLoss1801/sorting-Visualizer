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

        area.appendChild(d)
    }
})




bubble.addEventListener('click', async () => {
    await bblSort(arr);
})
















async function swapping(j) {
    let speed = document.getElementById('speed');
    speed = speed.value;


    speed = (120 - speed) * 10

    let el1 = document.getElementsByClassName(`bar_${j}`)[0];
    let el2 = document.getElementsByClassName(`bar_${j + 1}`)[0];
    swap(el1, el2);
    el1.style.background = "red";
    el2.style.background = "red";
    await new Promise(resolve => setTimeout(() => {
        resolve()
    }, speed));
    el1.style.background = "rgb(184, 184, 3)";
    el2.style.background = "rgb(184, 184, 3)";
}



function swap(el1, el2) {

    const style1 = window.getComputedStyle(el1);
    const style2 = window.getComputedStyle(el2);

    // console.log(style1);
    const transform1 = style1.getPropertyValue("height");
    const transform2 = style2.getPropertyValue("height");
    console.log(typeof (transform1));

    el1.style.height = transform2;
    el2.style.height = transform1;
    console.log('done');

}

async function bblSort(arr) {

    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < (arr.length - i - 1); j++) {

            if (arr[j] > arr[j + 1]) {
                let temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;

                await swapping(j);

            }
        }
    }
}

