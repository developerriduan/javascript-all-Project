function evenify(num) {
    if (num % 2 == 0) {
        console.log(num, ": it's even number ")
    }
    else {
        console.log(num, ": it's odd number ")
    }
}

nums = [23, 34, 2, 34, 5, 56];
for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    evenify(num)
}

frieds_Age = [23, 34, 12, 8, 10];
for (let i = 0; i < frieds_Age.length; i++) {
    const age = frieds_Age[i];
    evenify(age);
}