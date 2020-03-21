import { interval, timer } from 'rxjs';

const observer = {
  next: val => console.log('next', val),
  complete: () => console.log('completed'),
}

const todayAt5 = new Date();
todayAt5.setSeconds(todayAt5.getSeconds() + 5);

const interval$ = interval(1000);
// const timer$ = timer(3000);
// const timer$ = timer(2000, 1000);
const timer$ = timer(todayAt5);

console.log('start');
// interval$.subscribe(observer);
timer$.subscribe(observer);
console.log('end');
