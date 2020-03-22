import { of, from } from "rxjs";
import { distinct } from "rxjs/operators";

const numbers$ = of<number | string>(1, 1, 1, 3, '1', 3, 2, 2, 4, 4, 5, 3, 1);

numbers$
  .pipe(distinct())
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
    name: 'Dr. Willy'
  },
  {
    name: 'Zero'
  },
  {
    name: 'X'
  },
];

from(heroes)
  .pipe(distinct(p => p.name))
  .subscribe(console.log);
