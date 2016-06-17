import { Component } from '@angular/core';

import { HoleService } from '../../components/services/hole-service/hole-service.component';

@Component({
  templateUrl: 'build/pages/information/information-page.html'
})

export class InformationPage  {

  information: any;
  player: any;
  friends: any;

  constructor(holeService: HoleService) {
    this.information = holeService.getInformation();
    this.friends = this.information.friends;
    this.player = this.information.player;
  }


}
