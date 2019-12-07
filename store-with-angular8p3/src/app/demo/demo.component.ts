import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  title = '';
  items = ['Tankis', 'Jose Miguel', 'Leonardo'];
  power = 10;

  constructor() { }

  ngOnInit() {
  }

  addItem() {
    this.items.push('new item');
  }

  deleteItem(index: number) {
    this.items.splice(index, 1);
  }
}
