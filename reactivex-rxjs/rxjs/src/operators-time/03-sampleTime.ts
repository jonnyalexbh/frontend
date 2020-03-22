import { fromEvent } from 'rxjs';
import { sampleTime, tap, map } from 'rxjs/operators';

const click$ = fromEvent<MouseEvent>(document, 'click');
// .pipe(
//   tap(() => console.log('tap'))
// );

click$
  .pipe(
    sampleTime(3000),
    map(({ x, y }) => ({ x, y })),
  )
  .subscribe(console.log);
