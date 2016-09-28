import { Component } from '@angular/core';

import { HoleService } from '../../components/services/hole-service/hole-service.component';
import { TrophyService } from '../../components/services/trophy-service/trophy-service.component';
import { StorageService } from '../../components/services/storage-service/storage-service.component';

@Component({
  templateUrl: 'build/pages/information/information-page.html'
})

export class InformationPage  {

  information: any;
  player: any;
  friends: any;

  constructor(holeService: HoleService, trophyService: TrophyService, storageService: StorageService) {
    this.information = holeService.getInformation();
    storageService.setTrophies(trophyService.getTrophies(this.information));
    this.friends = this.information.friends;
    this.player = this.information.player;
    console.log('this.infor', this.information)
  }


}
