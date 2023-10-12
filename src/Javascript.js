// // 1. Check if user with such name Exists

// const user = [
//     {
//         id: 1,
//         name: "Fraz",
//         isActive: "false",
//         age: 10,
//     },
//     {
//         id: 2,
//         name: "Rohit",
//         isActive: "true",
//         age: 37,
//     },
//     {
//         id: 3,
//         name: "Vipin",
//         isActive: "false",
//         age: 34,
//     },
//     {
//         id: 4,
//         name: "Virat",
//         isActive: "true",
//         age: 65,
//     },
// ]

// //level 0 - solution
// const isNameExist = (name, user) => {

//     let exist = false
//     for (let i = 0; i < user.length; i++) {
//         if (user[i].name === name) {
//             exist = true
//         }
//     }
//     return exist;
// }

// //level 1

// const isNameExist = (name) => {
//     const isUser = user.find((user) => user.name === name)
//     return Boolean(isUser);
// }

// //level 02  to find index

// const isNameExist = (name) => {
//     const index = user.findIndex((user) => user.name === name)
//     return index;
//     // return index >= 0; to get true of false based on index number
// }


// console.log(isNameExist("Virat"))

// console.log(isNameExist("Vipin", user))

// // 03 with some
// const isNameExist = (name) => {
//     const index = user.some((user) => user.name === name)
//     return index;
// }
// console.log(isNameExist()) 

// // 2 Adding element to the Array

// const arr = [1, 2];
// // this method change original array
// const append = (arr, ele) => {
//     arr.push(ele);
//     return arr;
// }

// // this method don't change original array and return new array
// const append = (arr, ele) => {
//     return [...arr, ele];
// }

// console.log(append(arr, 3))


// // 3 remove duplicate Array

// const arr = [1, 2, 3, 4, 5, 5, 3, 3, 2, 1];

// function uniqueArr() {
//     const Ele = [];

//     arr.forEach((item) => {
//         if (!Ele.includes(item)) {
//             Ele.push(item)
//         }

//     })
//     return Ele;
// }
// console.log(uniqueArr())

// // 01 using new Set method

// const arr = [1, 2, 3, 4, 5, 5, 3, 3, 2, 1];

// function uniqueArr() {
//     return [...new Set(arr)]
// }
// console.log(uniqueArr())
// //02 with reduce method
// function uniqueArr(arr) {
//     return arr.reduce((acc, elm) => {

//         return acc.includes(elm) ? acc : [...acc, elm]
//     }, [])
// }
// console.log(uniqueArr(arr))

