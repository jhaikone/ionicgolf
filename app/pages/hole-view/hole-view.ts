import {Page} from 'ionic-angular';
import { StrokeInputComponent } from '../../components/directives/stroke-input/stroke-input.component';


@Page({
  templateUrl: 'build/pages/hole-view/hole-view.html',
  directives: [StrokeInputComponent]
})
export class HoleViewPage {

  strokes: any;
  putts: any;
  sands: any;
  penalties: any;

  constructor() {
    this.strokes = {key: 'strokes', value: 3};
    this.putts =  {key: 'putts', value: 2};
    this.sands =  {key: 'sands', value: 0};
    this.penalties = {key: 'penalties', value: 0};
  }

  /* onChange is triggered if any of the inputs' values are changed
  ** Primary total is strokes. Secondary total is all the rest
  */
  onChange($event) {
    if($event.key === 'strokes') {
      this._decreaseSecondaryTotal($event);
    } else {
      this.increasePrimaryTotal($event)
    }
  }

  /* increase strokes if the rest are greater*/
  increasePrimaryTotal($event) {
    let total: number = this.putts.value + this.sands.value + this.penalties.value;
    if(total >= this.strokes.value) {
      this.strokes.value = total;
    }
  }

  /* decrease rest if strokes is greater */
  _decreaseSecondaryTotal($event) {

    this._initSecondaryValue($event);

    let total:number = this.putts.value + this.sands.value + this.penalties.value;

    if (this.strokes.value < total) {
      if (this.penalties.value > 0) {
        this.penalties.value = this.penalties.value -1;
      } else if (this.sands.value > 0) {
        this.sands.value = this.sands.value -1;
      } else {
        this.putts.value = this.putts.value -1;
      }
    }

  }

  _initSecondaryValue($event) {
    switch ($event.key) {
      case 'putts': {
        this.putts.value = $event.value;
        break;
      }
      case 'sands': {
        this.sands.value = $event.value;
        break;
      }
      case 'penalties': {
        this.penalties.value = $event.value;
        break;
      }
    }
  }

}
