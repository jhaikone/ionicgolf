import  { Component, OnInit } from '@angular/core';

import { ViewController } from 'ionic-angular';

import { TrophyService } from '../../components/services/trophy-service/trophy-service.component';

enum Tabs {
  Xp,
  Medal,
  Trophy
}

const MOCK_LEVEL = {
  icon: 'ion-experience-5',
  value: 3
};

const MOCK_EXPERIENCE = 124;

@Component({
  templateUrl: 'build/pages/achievements/achievements-page.html'
})

export class AchievementsPage implements OnInit {

  tab: number = 0;
  trophyService: TrophyService;
  tabs = Tabs;
  width: String = '0';
  experience: any = 0;

  constructor (private viewCtrl: ViewController, trophyService: TrophyService) {
    this.trophyService = trophyService;
    console.log('tr', this.trophyService);
  }

  ionViewDidEnter() {
    this.width = ((MOCK_EXPERIENCE/(this.experience.toNext))*100).toString();
  }

  ngOnInit() {
    this.experience = this.trophyService.getLevel(MOCK_EXPERIENCE);
    console.log('tgegfe', this.experience);
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
    this.width = '70';
    this.tab = tab;
  }

  getLevel() {
    return MOCK_LEVEL;
  }


}
