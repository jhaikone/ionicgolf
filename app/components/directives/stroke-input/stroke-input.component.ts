import { Component, Input, Output, EventEmitter } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'stroke-input',
  templateUrl: 'build/components/directives/stroke-input/stroke-input.component.html'
})

export class StrokeInputComponent implements OnInit {

  showInput: boolean = false;

  @Input() label: String;
  @Input() total: any;
  @Input() primary:boolean;

  @Output() totalChange = new EventEmitter(false);

  ngOnInit() {
    //initing
  }

  increase() {
    let isPrimary = this.total.key === 'strokes' || this.total.key === 'putts' ? true : false;

    if(this.showInput || !isPrimary) {
      this.total.value++;
    }
    this.showInput = true;
    this.totalChange.emit(this.total);

  }

  decrease() {
    let minimumValue:number = this.total.key === 'strokes' ? 1 : 0;
    if(this.total.value > minimumValue ) {
        this.total.value--;
        this.totalChange.emit(this.total);
    }

  }

}
