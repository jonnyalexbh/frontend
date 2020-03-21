import { reduce, scan, map } from 'rxjs/operators';
import { from } from "rxjs";

const numbers = [1, 2, 3, 4, 5];

const totalAccumulator = ((acc, cur) => acc + cur);

// Reduce
from(numbers)
  .pipe(
    reduce(totalAccumulator, 0)
  )
  .subscribe(resp => console.log('reduce', resp));

// Scan
from(numbers)
  .pipe(
    scan(totalAccumulator, 0)
  )
  .subscribe(console.log);

// Redux
interface User {
  id?: string,
  authentication?: boolean,
  token?: string,
  age?: number,
}

const user: User[] = [
  {
    id: 'fher',
    authentication: false,
    token: null
  },
  {
    id: 'fher',
    authentication: true,
    token: 'ABC'
  },
  {
    id: 'fher',
    authentication: true,
    token: 'ABC123'
  },
];

const state$ = from(user).pipe(
  scan<User>((acc, cur) => {
    return { ...acc, ...cur }
  }, { age: 33 })
)

const id$ = state$.pipe(
  map(state => state)
);

id$.subscribe(console.log);
