import { Component, OnInit } from '@angular/core';
import { Input,Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  constructor() { }

  @Input() productItems;

  @Output() out = new EventEmitter();


  ngOnInit() {
    // this.beverages = 
  }

  sendEvent(product){
    this.out.emit(product);
    console.log('product');
  }

}
