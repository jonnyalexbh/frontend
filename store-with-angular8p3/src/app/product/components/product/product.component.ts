import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  OnInit,
  DoCheck,
  OnDestroy
} from '@angular/core';
import { Product } from '../../../core/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit, DoCheck, OnDestroy {
  @Input() product: Product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  today = new Date();

  constructor() {
    console.log('1 - this is the builder');
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   console.log('2 - ngOnChanges', changes);
  // }

  ngOnInit() {
    console.log('3 - this is the ngOnInit');
  }

  ngDoCheck() {
    console.log('4 - this is the ngDoCheck');
  }

  ngOnDestroy() {
    console.log('5 - this is the ngOnDestroy');
  }

  addCart() {
    console.log('Se agrego un producto al carrito');
    this.productClicked.emit(this.product.id);
  }
}
