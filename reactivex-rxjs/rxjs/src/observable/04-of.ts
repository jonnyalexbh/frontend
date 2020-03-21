import { of } from 'rxjs';

// const obs$ = of(1, 2, 3, 4, 5, 6);
const obs$ = of(...[1, 2, 3, 4, 5, 6], 99, 100);

console.log('start obs');
obs$.subscribe(
  next => console.log('next', next),
  null,
  () => console.log('the sequence ended')
);
console.log('end obs');
