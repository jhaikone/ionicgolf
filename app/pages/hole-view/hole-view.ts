import {Page, NavController} from 'ionic-angular';
import { SinglePlayerPage } from '../player-tabs/single-player-tab/single-player-tab';
import { MultiPlayerPage } from '../player-tabs/multi-player-tab/multi-player-tab';
import { HoleService } from '../../components/services/hole-service/hole-service.component';

@Page({
  templateUrl: 'build/pages/hole-view/hole-view.html',
  providers: [HoleService]
})

export class HoleViewPage{
  singlePlayerRoot = SinglePlayerPage;
  multiPlayerRoot = MultiPlayerPage;
  holeService: HoleService;
  par: any;

  constructor(holeService: HoleService) {
    this.holeService = holeService;
    this.par = holeService.getPar();
  }

}
