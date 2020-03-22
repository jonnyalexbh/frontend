import { interval, fromEvent } from 'rxjs';
import { takeUntil, skip, tap } from 'rxjs/operators';

const buttonStop = document.createElement('button');
buttonStop.innerHTML = 'Stop Timer';

document.querySelector('body').append(buttonStop);

const counter$ = interval(1000);
// const clickBtn$ = fromEvent(buttonStop, 'click');
const clickBtn$ = fromEvent(buttonStop, 'click').pipe(
  tap(() => console.log('tap before skipe')),
  skip(1),
  tap(() => console.log('tap after skipe')),
);

counter$
  .pipe(
    takeUntil(clickBtn$)
  )
  .subscribe({
    next: val => console.log('nextt', val),
    complete: () => console.log('completed'),
  });
