console.log('Hello World');

const greet = name => `Hello ${name}`;

console.log(greet('jonnyalexbh'));

const result = greet('jonnyalexbh');
const expected = 'Hello jonnyalexbh';

if (result === expected) {
  console.log('Successful test');
} else {
  console.log('unsuccessful test');
}
