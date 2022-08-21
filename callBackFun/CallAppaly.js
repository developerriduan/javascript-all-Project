const normalPerson = {
    firstName: 'Rahim',
    LastName: 'Uddin',
    Salary: 15000,
    getFullName: function () {
        console.log(this.firstName, this.LastName);
    },
    ChargeBill: function (amount, tips, tax) {
        console.log(this);
        this.Salary = this.Salary - amount - tips - tax;
        return this.Salary;
    }
}
const heroPerson = {
    firstName: 'Hero',
    LastName: 'Balam',
    Salary: 25000,
}
const firndlyPerson = {
    firstName: 'Hero',
    LastName: 'Galam',
    Salary: 25000,
}
// normalPerson.ChargeBill();
// const heroChargeBill = normalPerson.ChargeBill.bind(heroPerson);
// heroChargeBill(2000);
// heroChargeBill(1000);
// console.log(heroPerson.Salary);
// console.log(normalPerson.Salary);
// const firndlyChangeBill = normalPerson.ChargeBill.bind(firndlyPerson);
// firndlyChangeBill(5000);

// normalPerson.ChargeBill.call(heroPerson, 900);
// normalPerson.ChargeBill.call(heroPerson, 9000);
// console.log(heroPerson.Salary);

// normalPerson.ChargeBill.call(firndlyPerson, 5000, 500, 50);
// console.log(firndlyPerson.Salary);
// console.log(normalPerson.Salary);

normalPerson.ChargeBill.apply(heroPerson, [3000, 300, 30]);
normalPerson.ChargeBill.apply(heroPerson, [4000, 400, 40]);
console.log(heroPerson.Salary);