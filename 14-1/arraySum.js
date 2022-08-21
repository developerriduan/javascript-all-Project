// var numbers = [12, 23, 14, 34, 45, 6, 99,];
// var sum = 0;
// for (var i = 0; i < numbers.length; i++) {
//     var element = numbers[i];
//     sum = sum + element;
// }
// console.log("the total number ", sum);




// function array declear
// function getArraySum(numbers) {
//     var sum = 0;
//     for (var i = 0; i < numbers.length; i++) {
//         var element = numbers[i];
//         sum = sum + element;
//     }
//     return sum;
// }
// var numbers = [12, 23, 14, 34, 45, 6, 99];
// var result = getArraySum(numbers);
// console.log("total of the number", result);
// var total = getArraySum([23, 14, 34, 45, 47])
// console.log("total of the number ", total);

var names = [1, 23, 1, 2, 3, 2, 34, 5, 23, 34, 23, 4, 5, 6];
var uniqueName = [];

for (var i = 0; i < names.length; i++) {
    var element = names[i];
    var index = uniqueName.indexOf(element);
    if (index == -1) {
        uniqueName.push(element);
    }
}
console.log(uniqueName);