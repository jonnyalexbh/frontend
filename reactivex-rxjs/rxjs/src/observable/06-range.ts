import { of, range, asyncScheduler } from 'rxjs';

// const src$ = of(1, 2, 3, 4, 5);
const src$ = range(1, 5, asyncScheduler);

console.log('start');
src$.subscribe(console.log);
console.log('end');
