// const numbers = ['1', '5', '2', '6'];
// const newarray = [];
// numbers.forEach((number) => {
//     newarray.push(number*2);
// });
// console.log(newarray);



// const numbers1 = [20, 30, 40, 50];
// const mult = numbers1.map(num => num*2);

// console.log(mult);



// const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8];
// const evenNumbers = numbers2.filter(number => number % 2 === 0);
// console.log(evenNumbers);


// const numbers3 = [2, 4, 6, 8, 10];
// const allpositive = numbers3.every(number => number > 0);
// console.log(allpositive);


// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const negative = array.some(item => item < 0);
// console.log(negative);


// const array1 = [5, 8, 12, 6, 17, 2];
// const fristElement = array1.find(item => item > 10);
// console.log("первый елемент в масивве который больше 10", fristElement);


// const array1 = [5, 8, 12, 6, 17, 2];
// const fristElement = array1.findIndex(item => item > 12);
// console.log("index первого елемента в масивве ", fristElement);





// const array1 = [5, 8, 12, 6, 17, 2];
// const fristElement = array1.fill(item => item > 12);
// console.log("index первого елемента в масивве ", fristElement);



// const total = [1, 2, 3, 4, 5
// ].reduce(function (a, b){
//     return a + b;
// })
// console.log(total);




// const array1 = [5, ''];
// const array2 = ['пятница', ''];
// const array3 = array1.concat(array2);
// console.log(array3);



// const arr = [1, 2, 3, 4, 5];
// arr.pop();
// arr.push(5);
// console.log(arr);
// const lastelement = arr.pop();
// arr.push(lastelement);
// console.log(arr);

// let arr = [2, 3, 4];
// let newitem = 1;

// arr.unshift(newitem);
// console.log(arr);


// let arr1 = new Array(5);

// arr1.fill(0);

// console.log(arr1);

// const array = [1, 3, 4, 2, 6, 0, 8, 0, 5];


// const lastLessThanFive = array.findLast(element => element < 5);
// console.log("Последний элемент меньше 5:", lastLessThanFive);


// const lastIndexZero = array.findLastIndex(element => element === 0);
// console.log("Индекс последнего элемента, равного 0:", lastIndexZero);


// const doubledArray = array.flatMap(element => [element * 2]);
// console.log("Новый массив, каждый элемент удвоен:", doubledArray);


// const entriesArray = Array.from(array.entries());
// console.log("Массив пар [индекс, значение]:", entriesArray);


// const includesFive = array.includes(5);
// console.log("Массив содержит число 5:", includesFive);