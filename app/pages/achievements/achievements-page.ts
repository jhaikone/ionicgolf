import  { Component } from '@angular/core';

import { ViewController } from 'ionic-angular';

import { TrophyService } from '../../components/services/trophy-service/trophy-service.component';

@Component({
  templateUrl: 'build/pages/achievements/achievements-page.html'
})

export class AchievementsPage {

  trophyService: TrophyService;

  constructor (private viewCtrl: ViewController, trophyService: TrophyService) {
    this.trophyService = trophyService;
    console.log('tr', this.trophyService)
  }

  close() {
    this.viewCtrl.dismiss();
  }

  isBig(ribbon) {
    return ribbon.amount < 10
  }

  isDiscovered(ribbon) {
    return ribbon.amount > 0;
  }


}
