// function factorial(num) {
//     var fact = 1;
//     for (var i = 1; i < num; i++) {
//         fact = fact * 1;
//     }
//     return fact;
// }
// var result = factorial(5);
// console.log('result', result);


function factorialRecursive(number) {
    if (number == 1) {
        return 1;
    }
    else {
        return number * factorialRecursive(number - 1);
    }
}
var result = factorialRecursive(5);
console.log('result', result);