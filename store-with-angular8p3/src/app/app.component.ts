import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'store with angular 8p3';
  items = ['Tankis', 'Jose Miguel', 'Leonardo'];

  addItem() {
    this.items.push('new item');
  }

  deleteItem(index: number) {
    this.items.splice(index, 1)
  }
}
