import { Page } from 'ionic-angular';

import { HoleService } from '../../components/services/hole-service/hole-service.component';





@Page({
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
