import { of, from } from "rxjs";
import { distinctUntilChanged } from "rxjs/operators";

const numbers$ = of<number | string>(1, 1, 1, 3, '1', 3, 2, 2, 4, 4, 5, 3, 1);

numbers$
  .pipe(distinctUntilChanged())
  .subscribe(console.log);

interface Heroe {
  name: string
}

const heroes: Heroe[] = [
  {
    name: 'Megaman'
  },
  {
    name: 'X'
  },
  {
    name: 'Zero'
  },
  {
    name: 'Zero'
  },
  {
    name: 'Dr. Willy'
  },
  {
    name: 'Zero'
  },
  {
    name: 'X'
  },
  {
    name: 'X'
  },
];

from(heroes)
  .pipe(distinctUntilChanged((previous, current) => previous.name === current.name))
  .subscribe(console.log);
