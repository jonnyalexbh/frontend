import { range, from, fromEvent } from 'rxjs';
import { filter, map } from 'rxjs/operators';

// range(1, 10).pipe(
//   filter(val => val % 2 === 1),
// ).subscribe(console.log);

range(1, 10).pipe(
  filter((val, i) => {
    console.log('index', i);
    return val % 2 === 1
  }),
)//.subscribe(console.log);

interface Heroe {
  type: string,
  name: string
}

const heroes: Heroe[] = [
  {
    type: 'heroe',
    name: 'Batman'
  },
  {
    type: 'heroe',
    name: 'Robin'
  },
  {
    type: 'villano',
    name: 'Jocker'
  }
];

from(heroes)
  .pipe(filter(heroe => heroe.type !== 'heroe'))
  .subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup')
  .pipe(
    map(event => event.code),
    filter(key => key === 'Enter'),
  );

keyup$.subscribe(console.log);
