import { Page } from 'ionic-angular';
import { HoleService } from '../../components/services/hole-service/hole-service.component';



@Page({
  templateUrl: 'build/pages/information/information-page.html'
})

export class InformationPage  {

  ctx: any;


  constructor(holeService: HoleService) {
      this.ctx = document.getElementById("myChart");
  }


}
