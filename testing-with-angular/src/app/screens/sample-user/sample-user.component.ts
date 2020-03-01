import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample-user',
  templateUrl: './sample-user.component.html',
  styleUrls: ['./sample-user.component.scss']
})
export class SampleUserComponent implements OnInit {

  stateUser: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  activateUser(): void {
    this.stateUser = !this.stateUser;
  }

}
