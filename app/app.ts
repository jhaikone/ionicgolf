import {App, Platform, MenuController, Nav} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HoleViewPage} from './pages/hole-view/hole-view';
import {SinglePlayerPage} from './pages/player-tabs/single-player-tab/single-player-tab';
import { InformationPage } from './pages/information/information-page';
import { HoleService } from './components/services/hole-service/hole-service.component';


@App({
  templateUrl: 'build/app.html',
  config: {}, // http://ionicframework.com/docs/v2/api/config/Config/
  providers: [HoleService]
})
class MyApp {

  // rootPage: any = SinglePlayerPage;
  rootPage: any = InformationPage;

  constructor(
    private platform: Platform,
    private menu: MenuController
  ) {
    this.initializeApp();

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

}
