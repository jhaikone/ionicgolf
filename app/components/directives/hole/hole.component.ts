import { Component } from '@angular/core';
import { HoleService } from '../../services/hole-service/hole-service.component';

@Component({
  selector: 'hole',
  templateUrl: 'build/components/directives/hole/hole.component.html'
})

export class HoleComponent {

  holeService: any;

  constructor(holeService: HoleService) {
    this.holeService = holeService;
  }


  increaseStrokes() {
      this.holeService.getResult().singlePlayer.strokes.value++;
  }

  increase(key) {
      this.holeService.getResult().singlePlayer[key].value++;
      this.increasePrimaryTotal();
  }

  decreaseStrokes() {
    if(this.holeService.getResult().singlePlayer.strokes.value > 1) {
      this.holeService.getResult().singlePlayer.strokes.value--;
    }
    this._decreaseSecondaryTotal();
  }

  decrease(key) {
    this.holeService.getResult().singlePlayer[key].value--;
  }

  /* increase strokes if the rest are greater*/
  increasePrimaryTotal() {
    let result = this.holeService.getResult().singlePlayer;

    let total: number = result.putts.value + result.sands.value + result.penalties.value + result.drive.value;
    if(total > result.strokes.value) {
     result.strokes.value = total;
    }
  }

  /* decrease rest if strokes is greater */
  _decreaseSecondaryTotal() {

    let result = this.holeService.getResult().singlePlayer;

    let total:number = result.putts.value + result.sands.value + result.penalties.value + result.drive.value;
    if (result.strokes.value < total) {
      if (result.penalties.value > 0) {
        result.penalties.value = result.penalties.value -1;
      } else if (result.sands.value > 0) {
        result.sands.value = result.sands.value -1;
      } else {
        result.putts.value = result.putts.value -1;
      }
    }

  }

}
