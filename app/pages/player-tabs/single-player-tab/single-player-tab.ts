import { Component, Output, EventEmitter } from '@angular/core';

import { NavController, Modal } from 'ionic-angular';

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

  model: any;
  result: any;
  holes: any;

  constructor(holeService: HoleService, nav: NavController) {
    this.nav = nav;
    this.holeService = holeService;

    this.holes = this.holeService.getHoles();
    this.model = this.holeService.getResults();
    this.holeIndex = this.holeService.getIndex();
  }

  showAchievements() {
    let achievementsPage = Modal.create(AchievementsPage);
    this.nav.present(achievementsPage);
  }

  next() {
    //this.holeService.setIndex(this.holeService.getIndex()+1);
    this.holeService.holeChanged$.emit({
      direction: 'next'
    });
  }

  previous() {
    //this.holeService.setIndex(this.holeService.getIndex()-1);
    this.holeService.holeChanged$.emit({
      direction: 'previous'
    });
  }

  getHole() {
    return this.holeService.getIndex()+1;
  }

  getPar() {
    return this.holeService.getPar();
  }

  endRound() {
    console.log('results', this.holeService.getResults());
    this.nav.push(InformationPage, {});
  }

}
