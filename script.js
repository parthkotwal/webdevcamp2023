let age = 25;
// let person = {
//     name : "parth",
//     age : 16,
//     isStudent: true
// };
// console.log(person.name);

// for (let i = 0; i <= 5; i++) {
//     console.log(i);
// }

// let i = 0;
// while (i <= 5) {
//     console.log(i);
//     i++;
// }
let total = 1;
function factorial(num) {
    if (num == 0) {
        return total;
    } 
    total *= num;
    factorial(num-1);
}

console.log(factorial(5));