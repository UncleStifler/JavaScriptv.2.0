// let div = document.querySelectorAll('.one');
// console.log(div);
// // div.style.backgroundColor = 'red';
//
// for (let i = 0; i < div.length; i = i + 1) {
//     console.log(div[i]);
//     div[i].style.background = 'red';
//     div[i].onclick = two;
// }
//
// function two() {
//     console.log('work hard!!! - fuck more!!!');
// };
//
// let b = document.getElementsByClassName('one');
// let c = document.getElementsByTagName('div')
// console.log(b)
// console.log(c)
//
// for (let i = 0; i < b.length; i++) {
// b[i].style.border = '3px solid black'
// }

// document.querySelector('button').onclick = () => {
//     let r = document.querySelectorAll('input[type="radio"]');
//     console.log(r);
//     for (let i = 0; i < r.length; i++) {
//         if (r[i].checked) {
//             console.log(r[i].value);
//         }
//     }
// };
// let out = '';
// for (let i = 0; i < 30; i++) {
//     out += i + ' ';
//     if (i === 6) continue;
// }
// document.querySelector('#out').innerHTML = out;

// ВЛОЖЕННЫЕ ЦИКЛЫ
// let out = document.querySelector('.out');
// console.log(out);
// for (let i = 0; i < 5; i++) {
//     for (let k = 0; k < 10; k++) {
//         out.innerHTML += k;
//     }
//     out.innerHTML += '<br>';
// }


// for (let i = 1; i < 10; i++) {
//     for (let k = 1; k < 10; k++) {
//         out.innerHTML += `${i} * ${k} = ${k * i}<br>`;
//     }
//     out.innerHTML += "<hr>"
// }

// DO WHILE AND DO WHILE

for (let i = 0; i < 6; i++) {
    console.log(i);
}

let k = 0;
while (k < 5) {

    console.log(`k: ${k}`);
    k++;
}

// 0 + ... + 10

let sum = 0;
let p = 0;
while (p <= 10) {
    sum = sum + p;
    p++;
}
console.log(`sum = ${sum}`);

//****
//****
//****

let out = document.querySelector('.out');
p = 0;
let outStr = '';
let flag = 49;

while (p < 50) {
    let p1 = 0;
    while (p1 < 50) {
        p1 < flag ? outStr += "&nbsp" : outStr += '*';
        p1++;
    }
    flag--
    outStr += '<br>';
    p++;
}
out.innerHTML = outStr;