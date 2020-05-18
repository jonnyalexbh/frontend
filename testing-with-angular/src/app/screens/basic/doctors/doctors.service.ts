import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class DoctorsService {

  constructor(public http: HttpClient) { }

  getDoctors() {
    return this.http.get('...')
      .pipe(map(resp => resp['doctors']))
  }

  addDoctor(doctor: any) {
    return this.http.post('...', doctor)
      .pipe(map(resp => resp['doctor']))
  }

  deleteDoctor(id: string) {
    return this.http.delete('...')
      .pipe(map(resp => resp['doctor']))
  }

}
