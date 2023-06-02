function greet (name : string) {
    console.log(`Hello world ${name.toUpperCase()} !!`);
}

greet('Fer')

function getNumber():number {
    return Math.floor(Math.random() * 100)
}

console.log(getNumber());


function helloWorld (name : string):void {
    console.log(`Hello world ${name.toUpperCase()} !!`);
}
helloWorld('Fer')

function printPosition(position : {lat:number, long?:number | string}):void {
    console.log(`Latitude & Longitude LAT: ${position.lat} LONG: ${position.long}`);
    
}
printPosition({lat:100000, long:33333333})
printPosition({lat:100000, long:"Hola"})
printPosition({lat:100000})


function defectValue (name : string = 'User') {
    console.log(`Hello world ${name.toUpperCase()} !!`);
}

defectValue()