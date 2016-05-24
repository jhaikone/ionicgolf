import { Component, Input, Output, EventEmitter } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'stroke-input',
  templateUrl: 'build/components/directives/stroke-input/stroke-input.component.html'
})

export class StrokeInputComponent implements OnInit {

  @Input() label: String;
  @Input() total: any;
  @Input() primary:boolean;

  @Output() totalChange = new EventEmitter();

  ngOnInit() {
    //initing
  }

  increase() {
    console.log('incease')
    this.total.value++;
    this.totalChange.emit(this.total);
  }

  decrease() {
    if(this.total.value > 0) {
        this.total.value--;
        this.totalChange.emit(this.total);
    }

  }

}
