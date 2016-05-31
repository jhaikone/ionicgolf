import { Page, Slides } from 'ionic-angular';
import { HoleService } from '../../components/services/hole-service/hole-service.component';

export class AbstractTabController {

  holeService: HoleService;

  isLastHole: boolean = false;
  isFirstHole: boolean = true;

  slider:any;
  options:any;
  availableHoles:any;
  model: any;
  result: any;
  holes: any;

  constructor(holeService: HoleService) {

    this.holeService = holeService;

    this.availableHoles = [{index: 0},{index:1},{index:2},{index:3},{index:4},{index:5},{index:6},{index:7},{index:8}];
    this.holes = this.holeService.getHoles();
    this.model = this.holeService.getResults();

    this.options = {
      speed: 150,
      onInit: (slides: any) => this.slider = slides
    }

  }

  private initCurrentIndex() {
        console.log('active', this.slider);
    this.holeService.setIndex(this.slider.activeIndex);
  }

  next() {
    console.log('active', this.slider.activeIndex);
    this.isFirstHole = false;
    this.slider.slideNext();
    this.isLastHole = this.slider.isEnd;
    this.initCurrentIndex();
  }

  previous() {
    this.isLastHole = false;
    this.slider.slidePrev();
    this.initCurrentIndex();
    this.isFirstHole = this.slider.isBeginning;
  }

  onSlideChanged() {
    this.initCurrentIndex();
    this.isLastHole = this.slider.isEnd;
    this.isFirstHole = this.slider.isBeginning;
    console.log('index', this.holeService.getIndex());

  }

  getHole() {
    return this.holeService.getIndex()+1;
  }

  getPar() {
    return this.holeService.getPar();
  }

}