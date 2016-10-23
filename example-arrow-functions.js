// Array to be passed in to various function examples
var names = ['Julia', 'Cory', 'Jenny', 'Allison', 'Christie'];

// Standard forEach with annonymous function
names.forEach(function(name) {
  console.log(`forEach: ${name}`);
});

// Arrow function with call block for multiple lines of code
var count = 0;
console.log('count variable before:', count);
names.forEach((name) => {
  console.log('arrowFunc:', name);
  count++;
});
console.log('count variable value after:', count);
var count;

// Eaxample of an arrow function written in shorthand
names.forEach((name) => console.log('shorthandArrowFunc:', name));


// Arrow Functions return the end value by default
// Example of an arrow function written in shorthand /w simple expression (single line) for value to be returned
var returnMe = (name) => name + '!';
console.log(returnMe('Tarah'));

var person = {
  name: 'Tarah',
  greet: function(){
    names.forEach((name) => {
      console.log(`${this.name} says hi to ${name}.`)
    });
  }
}

person.greet();

// Challenge Area

function add (a, b) {
  return a + b;
}

// addStatement
var addStatement = (a, b) => {
  return a + b;
}

// addExpression
var addExpression = (a, b) => a+ b;

console.log(addStatement(1, 3));
console.log(addExpression(7, 1));
console.log(add(9, 0));
