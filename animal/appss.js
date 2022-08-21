function animalCalculator(depth) {
    var animal = 0;
    if (depth <= 10) {
        animal = depth * 50;
    } else if (depth <= 20) {
        var firstPart = 10 * 50;
        var remaining = depth - 10;
        var secodPart = remaining * 100;
        animal = firstPart + secodPart;
    } else {
        var firstPart = 10 * 50;
        var secodPart = 10 * 100;
        var remaining = depth - 20;
        var thirdPart = remaining * 300;
        animal = firstPart + secodPart + thirdPart;
    }
    return animal;
}
var count = animalCalculator(22);
console.log(count);