"use strict";
function greet(name) {
    console.log(`Hello world ${name.toUpperCase()} !!`);
}
greet('Fer');
function getNumber() {
    return Math.floor(Math.random() * 100);
}
console.log(getNumber());
function helloWorld(name) {
    console.log(`Hello world ${name.toUpperCase()} !!`);
}
helloWorld('Fer');
function printPosition(position) {
    console.log(`Latitude & Longitude LAT: ${position.lat} LONG: ${position.long}`);
}
printPosition({ lat: 100000, long: 33333333 });
printPosition({ lat: 100000, long: "Hola" });
printPosition({ lat: 100000 });
function defectValue(name = 'User') {
    console.log(`Hello world ${name.toUpperCase()} !!`);
}
defectValue();
