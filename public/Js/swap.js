


async function swapping(j) {
    let speed = document.getElementById('speed');
    speed = speed.value;


    speed = (120 - speed) * 10;

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



export { swapping }