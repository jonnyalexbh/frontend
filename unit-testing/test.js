const greet = name => `Hello ${name}`;

console.log(greet('jonnyalexbh'));

function expect(current) {
  return {
    toBe(expect) {
      if (current !== expect) {
        throw new Error('Unsuccessful test');
      }
    }
  }
}

function it(title, callback) {
  try {
    callback();
    console.log('Successful test');
  } catch (error) {
    console.error('Unsuccessful test');
  }
}

it('the function greets', () => {
  expect(greet('jonnyalexbh')).toBe('Hello jonnyalexbh');
});
