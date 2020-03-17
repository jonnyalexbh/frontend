import { Observable, Subscriber } from 'rxjs';

// const obs$ = Observable.create();
const obs$ = new Observable<string>(subs => {
  subs.next('Hello');
  subs.next('World');

  subs.next('Hello');
  subs.next('Tankis');

  subs.complete();

  subs.next('Hello');
  subs.next('Jose');
});

obs$.subscribe(console.log);
