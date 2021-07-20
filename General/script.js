// console.log("Hello" + " world");
//
// document.getElementById('out').innerHTML = 'Hello';
// document.getElementById('out').innerHTML = '2019';
// document.getElementById('out').innerHTML = '<b>2020</b>';
// document.getElementById("one").innerHTML = 888;
//
// document.querySelector('.header').innerHTML = 5;
// document.querySelector("#one").innerHTML = "<b>777</b>";

// const fun = (a) => {
//     if (a > 9) {
//         console.log("yes");
//     } else console.log("not");
// };

const buttonOK = document.querySelector('button');
const input = document.querySelector('.age');
//
// buttonOK.onclick = () => {
//     let num = +input.value;
//     if (num >= 16 && num < 60) {
//         console.log("Welcome");
//     } else if (num > 60 && num < 100) {
//         console.log("Ты точно сюда?");
//     } else if (num >= 100) {
//         console.log("Староват");
//     } else console.log("Не пройдешь");
// };


buttonOK.onclick = () => {
    let num = +input.value;
    switch (num) {
        case 15:
            console.log("Еще 3 года потерпи");
            break;
        case 16:
            console.log("Еще 2 года потерпи");
            break
        case 18:
            console.log("Заходи");
        default:
            console.log("оооок")
    }

};


let b = 5;



