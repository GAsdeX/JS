// 1
let string = 'some test string';
value = string[0].toUpperCase() + string.slice(1, -1) + string[string.length - 1].toUpperCase();

console.log(value);

value = `${ string[0].toUpperCase() }${ string.slice(1, -1) }${ string[string.length - 1].toUpperCase() }`;
console.log(value);

// 2
// let string = 'some test string';
value = string.indexOf('string');
console.log(value);

// 3
value = string.lastIndexOf(' ');
console.log(value);

// 4
value = string.slice(4, 9);
console.log(value);

// 5
value = Math.PI;
value = parseFloat(value.toFixed(2));

console.log(value);

// 6
value = Math.min(15, 11, 16, 12, 51, 12, 13, 51);
console.log(value);

value = Math.max(15, 11, 16, 12, 51, 12, 13, 51);
console.log(value);

// 7
value = Math.random();
value = parseFloat(value.toFixed(2));

console.log(value);

// 8
let x = 20;
value = Math.floor(Math.random() * x);

console.log(value);

// 9
value = 0.6 + 0.7;
value = parseFloat(value.toFixed(1));

console.log(value);

// 10
let object = {
    product: 'IPhone',
};

console.log(object);

// 11
object = {
    product: 'IPhone',
    price : 1000,
    currency : 'dollar',
};

console.log(object);

// 12
object = {
    details: {
        objectStyle: {
        model: 'apple',
        color: 'green',
        },
    }   
};

console.log(object);