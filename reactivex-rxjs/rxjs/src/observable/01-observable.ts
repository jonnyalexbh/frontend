import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
  next: value => console.log('[next]:', value),
  error: error => console.warn('[error]:', error),
  complete: () => console.info('completed [obs]')
};

// const obs$ = Observable.create();
const obs$ = new Observable<string>(subs => {
  subs.next('Hello');
  subs.next('World');

  subs.next('Hello');
  subs.next('Tankis');

  // force an error
  // const a = undefined;
  // a.name = 'Jonny';

  subs.complete();

  subs.next('Hello');
  subs.next('Jose');
});

obs$.subscribe(observer);

// obs$.subscribe(
//   valor => console.log('next', valor),
//   error => console.warn('error:', error),
//   () => console.info('completed')
// );
