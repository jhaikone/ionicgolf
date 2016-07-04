import  { Component } from '@angular/core';

import { ViewController } from 'ionic-angular';

import { TrophyService } from '../../components/services/trophy-service/trophy-service.component';

enum Tabs {
  Xp,
  Medal,
  Trophy
}

@Component({
  templateUrl: 'build/pages/achievements/achievements-page.html'
})

export class AchievementsPage {

  tab: number = 0;
  trophyService: TrophyService;
  tabs = Tabs;

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

  hasMedal(medal) {
    return medal.amount > 0 ? 'checkmark' : 'remove';
  }

  activeTab(tab) {
    console.log('tab', tab)
    this.tab = tab;
  }


}
