import  { Injectable } from '@angular/core';

let players = [
  {
    id: 24244,
    hcp: 36,
    name:"Juuso"
  },
  {
    id: 33442,
    hcp: 20,
    name:"Jesse"
  }
];

@Injectable()
export class HoleService {

  private index:number;
  private results:Array<any> = [];

  constructor() {
    this.index = 0;
    new Array(9).fill('mock').forEach(() => {
      this.results.push(this.createPlayerModel())
    });
  }

  getIndex() {
    return this.index;
  }

  setIndex(newIndex) {
    this.index = newIndex;
  }

  getModel() {
    return this.results[this.index];
  }

  getResultAt(index) {
    return this.results[index];
  }

  private createPlayerModel() {
   let objectPlayers = [];
   let totalPlayers = players;

   let strokes = {key: 'strokes', value: 3};
   let putts =  {key: 'putts', value: 2};
   let sands =  {key: 'sands', value: 0};
   let penalties = {key: 'penalties', value: 0};

   totalPlayers.forEach( (player)=> {
     objectPlayers.push({name: player.name, id: player.id, strokes, putts, sands,penalties, noResult: false});
   })

   return {
     players: objectPlayers
   };

  }

}
