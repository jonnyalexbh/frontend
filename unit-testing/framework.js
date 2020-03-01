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
    console.log(`✔ ${title}`);
  } catch (error) {
    console.error(`× ${title}`);
  }
}
