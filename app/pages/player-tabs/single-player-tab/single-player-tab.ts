import {Page, Slides} from 'ionic-angular';
import { StrokeInputComponent } from '../../../components/directives/stroke-input/stroke-input.component';
import { HoleService } from '../../../components/services/hole-service/hole-service.component';
import { AbstractTabController } from '../abstract-tab-controller';


@Page({
  templateUrl: 'build/pages/player-tabs/single-player-tab/single-player-tab-view.html',
  directives: [StrokeInputComponent]
})

export class SinglePlayerPage extends AbstractTabController {
  holeIndex:number = 0;

  constructor(holeService: HoleService) {
    super(holeService);
    console.log('single', this.model);
  }

  /* onChange is triggered if any of the inputs' values are changed
  ** Primary total is strokes. Secondary total is all the rest
  */
  onChange(event) {
    this.result = this.model.holes[this.holeIndex].results;
    if(event.key === 'strokes') {
      this._decreaseSecondaryTotal(event);
    } else {
      this.increasePrimaryTotal()
    }
  }

  /* increase strokes if the rest are greater*/
  increasePrimaryTotal() {
    let total: number = this.result.putts.value + this.result.sands.value + this.result.penalties.value + this.result.drive.value;
    if(total > this.result.strokes.value) {
      this.result.strokes.value = total;
    }
  }

  /* decrease rest if strokes is greater */
  _decreaseSecondaryTotal(event) {

    this._initSecondaryValue(event);

    let total:number = this.result.putts.value + this.result.sands.value + this.result.penalties.value + this.result.drive.value;

    if (this.result.strokes.value < total) {
      if (this.result.penalties.value > 0) {
        this.result.penalties.value = this.result.penalties.value -1;
      } else if (this.result.sands.value > 0) {
        this.result.sands.value = this.result.sands.value -1;
      } else {
        this.result.putts.value = this.result.putts.value -1;
      }
    }

  }

  _initSecondaryValue(event) {
    switch (event.key) {
      case 'putts': {
        this.result.putts.value = event.value;
        break;
      }
      case 'sands': {
        this.result.sands.value = event.value;
        break;
      }
      case 'penalties': {
        this.result.penalties.value = event.value;
        break;
      }
    }
  }

}
