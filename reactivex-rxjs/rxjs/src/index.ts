import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
  next: value => console.log('[next]:', value),
  error: error => console.warn('[error]:', error),
  complete: () => console.info('completed [obs]')
};
