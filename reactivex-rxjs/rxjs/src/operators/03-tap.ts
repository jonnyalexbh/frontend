import { range } from 'rxjs';
import { tap, map } from 'rxjs/operators';

const number$ = range(1, 5);

number$
  .pipe(
    tap(x => console.log('before', x)),
    map(val => val * 10),
    tap({
      next: val => console.log('after', val),
      complete: () => console.log('it is all over'),
    })
  )
  .subscribe(val => console.log('subs', val));
