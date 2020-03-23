import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ajax, AjaxError } from 'rxjs/ajax'

// const url = 'https://api.github.com/users?per_page=5';
const url = 'https://httpbin.orgxx/delay/1';

const handlerError = (res: AjaxError) => {
  console.warn('error:', res.message);
  return of({
    of: false,
    users: []
  });
}

const obs1$ = ajax.getJSON(url).pipe(catchError(handlerError));
const obs2$ = ajax(url).pipe(catchError(handlerError));

obs1$.subscribe(data => console.log('getJSON:', data));
obs2$.subscribe(data => console.log('ajax:', data));
