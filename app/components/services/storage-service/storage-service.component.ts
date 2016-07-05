import { Injectable } from '@angular/core';

import { Storage, SqlStorage } from 'ionic-angular';

import { TrophyService } from '../trophy-service/trophy-service.component';

@Injectable()
export class StorageService {

  ribbons: Storage = null;
  trophyService: any;

  constructor(trophyService: TrophyService) {
    console.log('at cons');
    this.trophyService = trophyService;
    this.ribbons = new Storage(SqlStorage);
    this.ribbons.query('CREATE TABLE IF NOT EXISTS Ribbons (Id INTEGER PRIMARY KEY, Total INTEGER)').then((response) => {
      console.log('table created');
      this.initRibbons();
    });
  }

  setTrophies(trophies) {
    trophies.ribbons.forEach((ribbon) => {
      let sql = 'UPDATE Ribbons SET Total = Total+1 WHERE Id = \"' + ribbon.id + '\"';
      console.log('setting sql', sql);
      this.ribbons.query(sql);
    })
    return this.ribbons.query('SELECT * FROM ribbons').then((response) => {
      console.log('res', response);
    })
  }

  // Get ribbon of our DB
  getRibbon(ribbon) {
    let sql = 'SELECT FROM ribbons WHERE Id = \"' + ribbon.id + '\"';
    return this.ribbons.query(sql);
  }

  initRibbons() {
    this.trophyService.getRibbons().forEach((ribbon)=> {
      console.log('inserting', ribbon);
      let sql = 'INSERT OR IGNORE INTO ribbons (Id, Total) VALUES (?,?)';
      this.ribbons.query(sql, [ribbon.id, 0]);
    })
  }

}
