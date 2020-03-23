import { ReplaySubject } from 'rxjs';

const obs$ = new ReplaySubject(2);

obs$.next(1);
obs$.next(2);
obs$.next(3);

obs$.subscribe(console.log);

obs$.subscribe({
  next: val => console.log('ObserverB', val)
});
