import { Component, OnInit } from '@angular/core';
import { DoctorsService } from './doctors.service';

@Component({
  selector: 'app-doctors',
  template: `<p>doctors works!</p>`,
  styles: []
})
export class DoctorsComponent implements OnInit {

  public doctors: any[] = [];
  public messageError: string;

  constructor(public doctorService: DoctorsService) { }

  ngOnInit() {
    this.doctorService.getDoctors()
      .subscribe(doctors => this.doctors = doctors);
  }

  aggregateDoctor() {
    const doctor = { name: 'Doctor Jose Miguel' };

    this.doctorService.addDoctor(doctor)
      .subscribe(
        doctorDB => this.doctors.push(doctorDB),
        err => this.messageError = err
      );
  }

  removeDoctor(id: string) {
    const verify = confirm('are you sure you want to delete this doctor');

    if (verify) {
      this.doctorService.deleteDoctor(id);
    }
  }

}
