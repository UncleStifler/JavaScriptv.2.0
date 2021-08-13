//метод map

let arr = [4, 5, 12, 200, 1, 0, -2];
let newArr = arr.map((item, index, array) => item * 5);
console.log(arr);
console.log(newArr);

// метод filter

let newFilterArr = arr.filter((item, index) => {
    if (item % 2 === 0) {
        return true;
    }

});

console.log(arr);
console.log(newFilterArr);