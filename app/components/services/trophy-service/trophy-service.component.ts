import  { Injectable } from '@angular/core';

const TROPHY = {
  ribbons: [
    {name: 'no-result', label: 'Saavuta yli tripla bogey', icon: 'ion-ribbon-no-result', amount: 102},
    {name: 'par', label: 'Saavuta par tulos', icon: 'ion-ribbon-par', amount: 0},
    {name: 'birdie', label: 'Saavuta birdie tulos', icon: 'ion-ribbon-birdie', amount: 9}
  ],
  medals: [
    {name: 'ten-rounds', label: 'Pelaa 10 kierrosta', icon: 'ion-no-result'},
    {name: 'twenty-rounds', label: 'Pelaa 20 kierrosta', icon: 'ion-no-result'}
  ]
}

@Injectable()
export class TrophyService {

  constructor() {

  }

  getRibbons() {
    return TROPHY.ribbons;
  }

  getMedals() {
    return TROPHY.medals;
  }

}
