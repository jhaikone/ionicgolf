import  { Injectable, EventEmitter } from '@angular/core';

let players = [
  {
    id: 33442,
    hcp: 20,
    name:"Jesse"
  },
  {
    id: 43442,
    hcp: 23,
    name:"Jaska"
  },
  {
    id: 53442,
    hcp: 10,
    name:"Pekka"
  }
];


/**
* Paloheinä
* 1 (par 4) - A 284 m, B 229 m, C 194 m
* 2 (par 3) - A 154 m, B 131 m, C 119 m
* 3 (par 5) - A 477 m, B 381 m, C 332 m
* 4 (par 5) - A 447 m, B 384 m, C 311 m
* 5 (par 3) - A 110 m, B 102 m, C 78 m
* 6 (par 5) - A 448 m, B 362 m, C 362 m
* 7 (par 4) - A 339 m, B 282 m, C 237 m
* 8 (par 3) - A 141 m, B 105 m, C 95 m
* 9 (par 4) - A 345 m, B 300 m, C 267 m
**/

const COURSES = [
  {
    id: 25664,
    name: "Paloheinä",
    tees: [
      {name:"a", metre: 2745},
      {name:"b", metre: 2276},
      {name:"c", metre: 1995}
    ],
    holes: [
      {
        hole: 1,
        par: 4,
        distances: {
          a: 284,
          b: 229,
          c: 194
        }
      },
      {
        hole: 2,
        par: 3,
        distances: {
          a: 154,
          b: 131,
          c: 119
        }
      },
      {
        hole: 3,
        par: 5,
        distances: {
          a: 477,
          b: 381,
          c: 332
        }
      },
      {
        hole: 4,
        par: 5,
        distances: {
          a: 447,
          b: 384,
          c: 311
        }
      },
      {
        hole: 5,
        par: 3,
        distances: {
          a: 110,
          b: 102,
          c: 78
        }
      },
      {
        hole: 6,
        par: 5,
        distances: {
          a: 448,
          b: 362,
          c: 362
        }
      },
      {
        hole: 7,
        par: 4,
        distances: {
          a: 339,
          b: 282,
          c: 237
        }
      },
      {
        hole: 8,
        par: 3,
        distances: {
          a: 141,
          b: 105,
          c: 95
        }
      },
      {
        hole: 9,
        par: 4,
        distances: {
          a: 345,
          b: 300,
          c: 267
        }
      }
    ]
  },
  {
    id: 24664,
    name: "Kytäjä",
    tees: ["a","b","c"],
    holes: [
      {
        hole: 1,
        par: 4,
        distances: {
          a: 284,
          b: 229,
          c: 194
        }
      },
      {
        hole: 2,
        par: 3,
        distances: {
          a: 154,
          b: 131,
          c: 119
        }
      },
      {
        hole: 3,
        par: 5,
        distances: {
          a: 477,
          b: 381,
          c: 332
        }
      },
      {
        hole: 4,
        par: 5,
        distances: {
          a: 447,
          b: 384,
          c: 311
        }
      },
      {
        hole: 5,
        par: 3,
        distances: {
          a: 110,
          b: 102,
          c: 78
        }
      },
      {
        hole: 6,
        par: 5,
        distances: {
          a: 448,
          b: 362,
          c: 362
        }
      },
      {
        hole: 7,
        par: 4,
        distances: {
          a: 339,
          b: 282,
          c: 237
        }
      },
      {
        hole: 8,
        par: 3,
        distances: {
          a: 141,
          b: 105,
          c: 95
        }
      },
      {
        hole: 9,
        par: 4,
        distances: {
          a: 345,
          b: 300,
          c: 267
        }
      }
    ]
  }
];

@Injectable()
export class HoleService {

  private index:number;
  private model:any = {holes: []};
  private holes: any;

  constructor() {
    this.index = 0;
    this.holes = COURSES[0].holes

    new Array(9).fill('mock').map((mock, index) => {

      let object = { results:
        {
          strokes: {value:this.holes[index].par, key: 'strokes'},
          putts: {value: 2, key: 'putts'},
          sands: {value: 0, key: 'sands'},
          penalties: {value: 0, key: 'penalties'},
          drive: {value: 1, key: 'drive'},
        },
        multiplayers: []
      };

      players.map((player) => {
        object.multiplayers.push(
          {
            id: player.id,
            name: player.name,
            strokes: {value:this.holes[index].par, key: 'strokes'}
          }
        );
      })

      this.model.holes[index] = object;

    });
    console.log(this.model);
  }

  getIndex() {
    return this.index;
  }

  setIndex(newIndex) {
    this.index = newIndex;
  }

  getModel() {
    return this.model[this.index];
  }

  getResultAt(index) {
    return this.model[index];
  }

  getResults() {
    return this.model;
  }

  getHoles() {
    return this.holes;
  }

  getPar() {
    return this.holes[this.index].par;
  }

  private createPlayerModel(index) {
   let objectPlayers = [];
   let totalPlayers = players;

   let strokes = {key: 'strokes', value: this.holes[index].par};
   let putts =  {key: 'putts', value: 2};
   let sands =  {key: 'sands', value: 0};
   let penalties = {key: 'penalties', value: 0};
   let drive = {key: 'drive', value: 1};

   totalPlayers.forEach( (player)=> {
     objectPlayers.push({name: player.name, id: player.id, strokes, putts, sands, penalties, drive, noResult: false});
   })

   return {
     players: objectPlayers
   };

  }

}
