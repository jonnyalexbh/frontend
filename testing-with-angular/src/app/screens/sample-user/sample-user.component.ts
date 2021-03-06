import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample-user',
  templateUrl: './sample-user.component.html',
  styleUrls: ['./sample-user.component.scss']
})
export class SampleUserComponent implements OnInit {

  title = 'user status';
  total = 100;
  stateUser = false;

  constructor() { }

  ngOnInit() {
  }

  activateUser(): void {
    this.stateUser = !this.stateUser;
  }

  subtract(value) {
    this.total -= value;
  }

}
