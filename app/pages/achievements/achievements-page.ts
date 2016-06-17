import  { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  template: `
  <ion-content padding>
    <h2>I'm a modal!</h2>
    <button (click)="close()">Close</button>
  </ion-content>`
})

export class AchievementsPage {

  constructor(
    private viewCtrl: ViewController) {}

  close() {
    this.viewCtrl.dismiss();
  }
}
