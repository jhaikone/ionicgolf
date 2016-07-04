import  { Injectable } from '@angular/core';

const TROPHY = {
  ribbons: [
    {name: 'no-result', label: 'Merkkaa korttiin yli tripla bogey', icon: 'ion-ribbon-no-result', amount: 102, xp: 25},
    {name: 'par', label: 'Merkkaa korttiin par tulos', icon: 'ion-ribbon-par', amount: 0, xp: 50},
    {name: 'birdie', label: 'Merkkaa korttiin birdie tulos', icon: 'ion-ribbon-birdie', amount: 75},
    // {name: 'eagle', label: 'Merkkaa korttiin eagle tulos', icon: 'ion-ribbon-birdie', amount: 150}
  ],
  medals: [
    {name: 'ten-rounds', label: 'Pelaa 10 kierrosta', icon: 'ion-medal-ten-rounds', amount: 1, xp: 1000},
    {name: 'ten-rounds', label: 'Pelaa 20 kierrosta', icon: 'ion-medal-twenty-rounds', amount: 1, xp: 2000},
    {name: 'ten-rounds', label: 'Pelaa 50 kierrosta', icon: 'ion-medal-fifty-rounds', amount: 0, xp: 4000},
    {name: 'ten-rounds', label: 'Pelaa 100 kierrosta', icon: 'ion-medal-hundred-rounds', amount: 0, xp: 10000},
    {name: 'eagle', label: 'Saavuta 25 eaglea', icon: 'ion-medal-eagle', amount: 1, xp: 15000},
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
