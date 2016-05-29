import {App, Platform, MenuController, Nav} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HoleViewPage} from './pages/hole-view/hole-view';
import {SinglePlayerPage} from './pages/player-tabs/single-player-tab/single-player-tab';


@App({
  templateUrl: 'build/app.html',
  config: {} // http://ionicframework.com/docs/v2/api/config/Config/
})
class MyApp {

  rootPage: any = HoleViewPage;

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
