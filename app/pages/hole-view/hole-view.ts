import {Page, Slides} from 'ionic-angular';
import { StrokeInputComponent } from '../../components/directives/stroke-input/stroke-input.component';
import { HoleService } from '../../components/services/hole-service/hole-service.component';

@Page({
  templateUrl: 'build/pages/hole-view/hole-view.html',
  directives: [StrokeInputComponent],
  providers: [HoleService]
})
export class HoleViewPage {

  holeService: HoleService;

  currentIndex:number = 0;
  playerIndex: number = 0;
  isLastHole: boolean = false;
  isFirstHole: boolean = true;

  slider:any;
  options:any;
  availableHoles:any;
  model: any;
  currentPlayer: any;
  results: any;
  holes: any;


  constructor(holeService: HoleService) {

    this.holeService = holeService;

    this.availableHoles = [{index: 0},{index:1},{index:2},{index:3},{index:4},{index:5},{index:6},{index:7},{index:8}];

    this.updateModel();

    this.results = this.holeService.getResults();
    this.holes = this.holeService.getHoles();

    this.options = {
      speed: 150,
      onInit: (slides: any) => this.slider = slides
    }

  }

  /* onChange is triggered if any of the inputs' values are changed
  ** Primary total is strokes. Secondary total is all the rest
  */
  onChange(event) {
    if(event.key === 'strokes') {
      this._decreaseSecondaryTotal(event);
    } else {
      this.increasePrimaryTotal(event)
    }
  }

  /* increase strokes if the rest are greater*/
  increasePrimaryTotal($event) {
    let total: number = this.currentPlayer.putts.value + this.currentPlayer.sands.value + this.currentPlayer.penalties.value;
    if(total >= this.currentPlayer.strokes.value) {
      this.currentPlayer.strokes.value = total;
    }
  }

  /* decrease rest if strokes is greater */
  _decreaseSecondaryTotal(event) {

    this._initSecondaryValue(event);

    let total:number = this.currentPlayer.putts.value + this.currentPlayer.sands.value + this.currentPlayer.penalties.value;

    if (this.currentPlayer.strokes.value < total) {
      if (this.currentPlayer.penalties.value > 0) {
        this.currentPlayer.penalties.value = this.currentPlayer.penalties.value -1;
      } else if (this.currentPlayer.sands.value > 0) {
        this.currentPlayer.sands.value = this.currentPlayer.sands.value -1;
      } else {
        this.currentPlayer.putts.value = this.currentPlayer.putts.value -1;
      }
    }

  }

  _initSecondaryValue(event) {
    switch (event.key) {
      case 'putts': {
        this.currentPlayer.putts.value = event.value;
        break;
      }
      case 'sands': {
        this.currentPlayer.sands.value = event.value;
        break;
      }
      case 'penalties': {
        this.currentPlayer.penalties.value = event.value;
        break;
      }
    }
  }

  private updateModel() {
    this.model = this.holeService.getModel();
    this.currentPlayer = this.model.players[0];
  }

  private initCurrentIndex() {
    this.holeService.setIndex(this.slider.activeIndex);
    this.currentIndex = this.holeService.getIndex();
  }

  next() {
    this.isFirstHole = false;
    this.slider.slideNext();
    this.isLastHole = this.slider.isEnd;
    this.initCurrentIndex();
    this.updateModel();
  }

  previous() {
    this.isLastHole = false;
    this.slider.slidePrev();
    this.initCurrentIndex();
    this.updateModel();
    this.isFirstHole = this.slider.isBeginning;
  }

  onSlideChanged() {
    this.initCurrentIndex();
    this.updateModel();
    this.isLastHole = this.slider.isEnd;
    this.isFirstHole = this.slider.isBeginning;
  }

}
