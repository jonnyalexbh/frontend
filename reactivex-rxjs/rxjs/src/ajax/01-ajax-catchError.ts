import { ajax, AjaxError } from 'rxjs/ajax';
import { pluck, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

const url = 'https://api.github.com/users?per_page=5';

const handlerError = (response: Response) => {
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response;
};

const handlerErrorRxjs = (err: AjaxError) => {
  console.warn('error in:', err.message);
  return of([]);
}

const fetchPromise = fetch(url);

// fetchPromise
//   .then(resp => resp.json())
//   .then(data => console.log('data:', data))
//   .catch(error => console.warn('error get users', error));

// fetchPromise
//   .then(handlerError)
//   .then(resp => resp.json())
//   .then(data => console.log('data:', data))
//   .catch(error => console.warn('error get users', error));


ajax(url)
  .pipe(
    pluck('response'),
    catchError(handlerErrorRxjs)
  )
  .subscribe(console.log)
