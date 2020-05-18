import { Component, OnInit } from '@angular/core';
import { DoctorService } from './doctor.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styles: []
})
export class DoctorsComponent implements OnInit {

  doctors: any[] = [];

  constructor(private doctorService: DoctorService) { }

  ngOnInit() {
  }

  greetDoctor(name: string) {
    return `Hello ${name}`;
  }

  allDoctors() {
    this.doctorService.getDoctors().subscribe((doctors: any[]) => this.doctors = doctors);
  }

}
