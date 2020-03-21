import { asyncScheduler } from 'rxjs'

// setTimeout(() => { }, 3000);
// setInterval(() => { }, 3000);

const greet1 = () => console.log('Hello World');
const greet2 = name => console.log(`Hello World ${name}`);

// asyncScheduler.schedule(greet1, 2000);
// asyncScheduler.schedule(greet2, 2000, 'jonnyalexbh');

const subs = asyncScheduler.schedule(function (state) {
  console.log(state);
  this.schedule(state + 1, 1000);
}, 3000, 0);


// setTimeout(() => {
//   subs.unsubscribe();
// }, 6000)

asyncScheduler.schedule(() => subs.unsubscribe(), 6000);

