import {DomSanitizationService} from '@angular/platform-browser';
import {Page, Slides, NavController} from 'ionic-angular';
import { StrokeInputComponent } from '../../../components/directives/stroke-input/stroke-input.component';
import { HoleService } from '../../../components/services/hole-service/hole-service.component';
import { AbstractTabController } from '../abstract-tab-controller';
import { InformationPage } from '../../information/information-page';


@Page({
  templateUrl: 'build/pages/player-tabs/single-player-tab/single-player-tab-view.html',
  directives: [StrokeInputComponent]
})

export class SinglePlayerPage extends AbstractTabController {
  holeIndex:number = 0;
  degrees: any;
  style: string;
  multiPlayerSelected: boolean;
  nav: NavController;

  constructor(holeService: HoleService, private sanitizer:DomSanitizationService, nav: NavController) {
    super(holeService);
    this.sanitizer = sanitizer;
    this.nav = nav;

    this.style = "transform: translate3d(0px ,0px, 0px) scaleX(180)";

  }

  getStyle() {
    let style = "transform: translate3d(0px ,0px, 0px) scaleX(50vw)";
    return this.sanitizer.bypassSecurityTrustStyle(this.style);
  }

  setStyle(xPosition) {
    let tabWidth = (window.innerWidth/2).toString();
    this.style = 'transform: translate3d(' + xPosition + ',0px, 0px) scaleX('+tabWidth+')';
  }

  endRound() {
    console.log('results', this.holeService.getResults());
    this.nav.push(InformationPage, {});
  }

}
