function factorial(num) {
    var fact = 1;
    for (var i = 1; i <= num; i++) {
        fact = fact * 1;
    }
    return fact;
}

var result = factorial(5);
console.log('result', result)