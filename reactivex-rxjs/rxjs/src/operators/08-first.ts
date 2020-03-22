import { fromEvent } from 'rxjs';
import { first, tap } from 'rxjs/operators';

const click$ = fromEvent<MouseEvent>(document, 'click');

click$
  .pipe(
    tap(resp => console.log('tap', resp)),
    first<MouseEvent>(event => event.clientY >= 150)
  )
  .subscribe({
    next: val => console.log('next:', val),
    complete: () => console.log('completed')
  });
