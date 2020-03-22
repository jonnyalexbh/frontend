import { from } from "rxjs";
import { distinctUntilKeyChanged } from "rxjs/operators";

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
  .pipe(distinctUntilKeyChanged('name'))
  .subscribe(console.log);
