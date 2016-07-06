import  { Component, OnInit } from '@angular/core';

import { ViewController } from 'ionic-angular';

import { TrophyService } from '../../components/services/trophy-service/trophy-service.component';
import { StorageService } from '../../components/services/storage-service/storage-service.component';

enum Tabs {
  Xp,
  Medal,
  Trophy
}

const MOCK_LEVEL = {
  icon: 'ion-level-5',
  value: 3
};

const MOCK_EXPERIENCE = 124;

@Component({
  templateUrl: 'build/pages/achievements/achievements-page.html'
})

export class AchievementsPage implements OnInit {


  trophyService: TrophyService;
  storageService: StorageService;

  tab: number = 0;
  tabs = Tabs;
  width: String = '0';
  experience: any = 0;
  ribbons: any = [];
  medals: any = [];

  constructor (private viewCtrl: ViewController, trophyService: TrophyService, storageService: StorageService) {
    this.trophyService = trophyService;
    this.storageService = storageService;

    this.storageService.getRibbons().then((response) => {
      this.ribbons = Array.from(response.res.rows);
    });

    this.storageService.getMedals().then((response) => {
      this.medals = Array.from(response.res.rows);
    });
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
    let userRibbon = this.findInList(this.ribbons, 'Id', ribbon.id);
    return userRibbon ? userRibbon.Total < 10 : false;
  }

  private findInList(list, key, id) {
    return list.find((object) => {
      return object[key] === id;
    })
  }

  isRibbonDiscovered(ribbon) {
    let userRibbon = this.findInList(this.ribbons, 'Id', ribbon.id);
    return userRibbon ? userRibbon.Total > 0 : false;
  }

  isMedalDiscovered(medal) {
    let userMedal = this.findInList(this.medals, 'Id', medal.id);
    return userMedal ? userMedal.Total > 0 : false;
  }

  getRibbonCount(ribbon) {
    let userRibbon = this.findInList(this.ribbons, 'Id', ribbon.id);
    return userRibbon ? userRibbon.Total : 0;
  }

  hasMedal(medal) {
    let userMedal = this.findInList(this.medals, 'Id', medal.id);
    return userMedal && userMedal.total > 0 ? 'checkmark' : 'remove';
  }

  activeTab(tab) {
    this.tab = tab;
  }

  getLevel() {
    return MOCK_LEVEL;
  }


}
