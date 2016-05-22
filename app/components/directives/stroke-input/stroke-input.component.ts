import { Component, Input, Output, EventEmitter } from '@angular/core';
import { OnInit } from '@angular/core'
/**
 * This class represents the toolbar component.
 */
@Component({
  selector: 'stroke-input',
  templateUrl: 'build/components/directives/stroke-input/stroke-input.component.html'
})

export class StrokeInputComponent implements OnInit {

  @Input() label: String;
  @Input() total: any;

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
    if(this.total.value > 1) {
        this.total.value--;
        this.totalChange.emit(this.total);
    }

  }

}
