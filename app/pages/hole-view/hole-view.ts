import { Page } from 'ionic-angular';
import { SinglePlayerPage } from '../player-tabs/single-player-tab/single-player-tab';
import { MultiPlayerPage } from '../player-tabs/multi-player-tab/multi-player-tab';
import { HoleService } from '../../components/services/hole-service/hole-service.component';

@Page({
  templateUrl: 'build/pages/hole-view/hole-view.html'
})

export class HoleViewPage{
  singlePlayerRoot = SinglePlayerPage;
  multiPlayerRoot = MultiPlayerPage;
  holeService: HoleService;

  constructor(holeService: HoleService) {
    this.holeService = holeService;
  }

  getHole() {
    return this.holeService.getIndex()+1;
  }

  getPar() {
    return this.holeService.getPar();
  }

}
