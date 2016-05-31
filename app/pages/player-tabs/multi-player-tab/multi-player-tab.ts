import { Page, Slides} from 'ionic-angular';
import { StrokeInputComponent } from '../../../components/directives/stroke-input/stroke-input.component';
import { HoleService } from '../../../components/services/hole-service/hole-service.component';
import { AbstractTabController } from '../abstract-tab-controller';


@Page({
  templateUrl: 'build/pages/player-tabs/multi-player-tab/multi-player-tab-view.html',
  directives: [StrokeInputComponent]
})

export class MultiPlayerPage extends AbstractTabController {

  constructor(holeService: HoleService) {
    super(holeService)
  }

}
