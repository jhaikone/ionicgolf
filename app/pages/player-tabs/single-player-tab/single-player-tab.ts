import { Component } from '@angular/core';
import { DomSanitizationService } from '@angular/platform-browser';

import { Slides, NavController, Modal } from 'ionic-angular';

import { StrokeInputComponent } from '../../../components/directives/stroke-input/stroke-input.component';
import { HoleComponent } from '../../../components/directives/hole/hole.component';
import { PanDirective } from '../../../components/directives/gestures/pan';
import { HoleService } from '../../../components/services/hole-service/hole-service.component';
import { InformationPage } from '../../information/information-page';
import { AchievementsPage } from '../../achievements/achievements-page';


@Component({
  templateUrl: 'build/pages/player-tabs/single-player-tab/single-player-tab-view.html',
  directives: [StrokeInputComponent, PanDirective, HoleComponent]
})

export class SinglePlayerPage {

  holeService: HoleService;
  nav: NavController;

  isLastHole: boolean = false;
  isFirstHole: boolean = true;
  multiPlayerSelected: boolean;

  holeIndex:number;
  style: string;

  slider:any;
  options:any;
  availableHoles:any;
  model: any;
  result: any;
  holes: any;

  constructor(holeService: HoleService, private sanitizer:DomSanitizationService, nav: NavController) {
    this.sanitizer = sanitizer;
    this.nav = nav;
    this.holeService = holeService;

    this.availableHoles = [{index: 0},{index:1},{index:2},{index:3},{index:4},{index:5},{index:6},{index:7},{index:8}];
    this.holes = this.holeService.getHoles();
    this.model = this.holeService.getResults();
    this.holeIndex = this.holeService.getIndex();

    this.options = {
      speed: 150,
      onInit: (slides: any) => this.slider = slides
    }

    this.style = "transform: translate3d(0px ,0px, 0px) scaleX(180)";

  }


  private initCurrentIndex() {
    this.holeService.setIndex(this.slider.activeIndex);
  }

  showAchievements() {
    let achievementsPage = Modal.create(AchievementsPage);
    this.nav.present(achievementsPage);
  }

  next() {
    this.holeService.setIndex(this.holeService.getIndex()+1);
  }

  previous() {
    this.holeService.setIndex(this.holeService.getIndex()-1);
  }

  getHole() {
    return this.holeService.getIndex()+1;
  }

  getPar() {
    return this.holeService.getPar();
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
