// object is a collection of key value pairs
//functions inside objects are called Methods
//an object representation 

// let car = {
//     make: 'BMW',
//     model: '745li',
//     year: 2010,
//     getPrice: function () {
//         return 500000;
//     },
//     printDescription: function () {
//         console.log(this.make + ' ' + this.model);
//     }
// }

// car.printDescription();
// console.log(car.year); //Values of properties inside object are accessed using dot(.) operator
// console.log(car[year]); //can also do this will get the same result but not preferrable.

//another way of object representation
//Here you are adding the properties and values explicitly into the object. Adhoc feature
// let anotherCar = {};
// anotherCar.whatever = 'Audi';
// console.log(anotherCar.whatever); //prints Audi

//object inside an object

// let a = {
//     myProperty: {
//         myValue: {
//             a: 'Hello there';
//         }
//     }
// }
// console.log(a.myProperty.myValue.a); //prints Hello there

//objects inside an array

let b = {
    myProperty: [{
        year: 2017,
        make: "BMW",
        model: '745li'
    }]
}

console.log(b.myProperty[0].model); //print 745li