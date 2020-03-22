import { from } from "rxjs";
import { distinctUntilChanged } from "rxjs/operators";

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
