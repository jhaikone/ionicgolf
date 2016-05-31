import {DomSanitizationService} from '@angular/platform-browser';
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
  degrees: any;
  style: string;
  multiPlayerSelected: boolean;

  constructor(holeService: HoleService, private sanitizer:DomSanitizationService) {
    super(holeService);
    this.sanitizer = sanitizer;
    this.style = "transform: translate3d(0px ,0px, 0px) scaleX(180)";

  }

  getStyle() {
    let style = "transform: translate3d(0px ,0px, 0px) scaleX(180)";
    return this.sanitizer.bypassSecurityTrustStyle(this.style);
  }

  setStyle(xPosition) {
    this.style = 'transform: translate3d(' + xPosition + ',0px, 0px) scaleX(180)';
    console.log('thisstyle', this.style);
  }

}
