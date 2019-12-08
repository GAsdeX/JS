let string = 'some test string';

value = string[0].toUpperCase() + string.slice(1, -1) + string[string.length - 1].toUpperCase();

console.log(value);

value = `${ string[0].toUpperCase() }${ string.slice(1, -1) }${ string[string.length - 1].toUpperCase() }`;

console.log(value);