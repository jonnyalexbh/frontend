import { BehaviorSubject } from 'rxjs';

const obs$ = new BehaviorSubject<number>(29);

// obs$.next(1);
// obs$.next(2);

obs$.subscribe(console.log);

// obs$.subscribe({
//   next: val => console.log('ObserverB', val)
// });
