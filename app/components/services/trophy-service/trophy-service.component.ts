import  { Injectable } from '@angular/core';

const TROPHY = {
  ribbons: [
    {id: 1, name: 'no-result', label: 'Merkkaa korttiin yli tripla bogey', icon: 'ion-ribbon-no-result', amount: 102, xp: 25},
    {id: 2, name: 'par', label: 'Merkkaa korttiin par tulos', icon: 'ion-ribbon-par', amount: 0, xp: 50},
    {id: 3, name: 'birdie', label: 'Merkkaa korttiin birdie tulos', icon: 'ion-ribbon-birdie', amount: 75},
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

const EXPERIENCE = {
  levelCaps: [
    { level:1, cap: 100, toNext: 150 },
    { level:2, cap: 150, toNext: 200 },
    { level:3, cap: 200, toNext: 250 },
    { level:4, cap: 250, toNext: 300 },
    // { level:5, cap: 300, toNext: 150 },
    // { level:6, cap: 375, toNext: 150 },
    // { level:7, cap: 450, toNext: 150 },
    // { level:8, cap: 525, toNext: 150 },
    // { level:9, cap: 650, toNext: 150 },
    // { level:10, cap: 800, toNext: 150 }

],
  icon: {
    5: 'ion-level-5',
    10: 'ion-level-10',
    15: 'ion-level-15',
    20: 'ion-level-20'
  }
}

@Injectable()
export class TrophyService {

  getRibbons() {
    return TROPHY.ribbons;
  }

  getMedals() {
    return TROPHY.medals;
  }

  getLevel(xp) {
    for (let i = 0; i < EXPERIENCE.levelCaps.length; i++) {
      if(xp < EXPERIENCE.levelCaps[0].cap) {
        return EXPERIENCE.levelCaps[0];
      }
      if(xp >= EXPERIENCE.levelCaps[i].cap && xp < EXPERIENCE.levelCaps[i+1].cap) {
        return EXPERIENCE.levelCaps[i];
      }
    }
  }

  getTrophies(information) {
    let trophies = {
      ribbons: [],
      medals: []
    }

    console.log('info', information);
    console.log('stati', information.statistics)

    TROPHY.ribbons.forEach((ribbon) => {
      switch(ribbon.name) {
        case 'no-result':
          if(this.hasNoResults(information.player.statistics.noResults)) {
            trophies.ribbons.push(ribbon);
          }
          break;
      }
    });
    console.log('trophies', trophies);
    return trophies;
  }

  private hasNoResults(noResults) {
    return noResults.amount > 0;
  }

}
