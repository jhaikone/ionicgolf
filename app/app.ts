import { Component } from '@angular/core';

import { ionicBootstrap, Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { SinglePlayerPage } from './pages/player-tabs/single-player-tab/single-player-tab';
import { InformationPage } from './pages/information/information-page';
import { HoleService } from './components/services/hole-service/hole-service.component';
import { TrophyService } from './components/services/trophy-service/trophy-service.component';
import { StorageService } from './components/services/storage-service/storage-service.component';


@Component({
  templateUrl: 'build/app.html'
})

class MyApp {

  // rootPage: any = SinglePlayerPage;
  rootPage: any = InformationPage;

  constructor(
    private platform: Platform,
    private menu: MenuController,
    storageService: StorageService
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


// Pass the main app component as the first argument
// Pass any providers for your app in the second argument
// Set any config for your app as the third argument:
// http://ionicframework.com/docs/v2/api/config/Config/
ionicBootstrap(MyApp, [HoleService, TrophyService, StorageService],{});
