import { Injectable } from '@angular/core';

import { Storage, SqlStorage } from 'ionic-angular';

import { TrophyService } from '../trophy-service/trophy-service.component';

@Injectable()
export class StorageService {


  trophyService: any;

  storage: Storage = null;
  medals: Storage = null;

  constructor(trophyService: TrophyService) {
    this.trophyService = trophyService;

    this.storage = new Storage(SqlStorage);
    this.storage.query('CREATE TABLE IF NOT EXISTS Ribbons (Id INTEGER PRIMARY KEY, Total INTEGER)').then((response) => {
      this.initRibbons();
    });

    this.storage.query('CREATE TABLE IF NOT EXISTS Medals (Id INTEGER PRIMARY KEY, Total INTEGER, RibbonId INTEGER, RibbonCap INTEGER)').then((response) => {
      this.initMedals();
    });

  }

  //Update Ribbon Total according trophies for Ribbons table
  setTrophies(trophies) {
    trophies.ribbons.forEach((ribbon) => {
      let sql = 'UPDATE Ribbons SET Total = Total+1 WHERE Id = \"' + ribbon.id + '\"';
      console.log('setting sql', sql);
      this.storage.query(sql).then((response) => {
        console.log('inserted', response);
      });
    });
  }

  // Get ribbon from our Ribbons table
  getRibbon(ribbon) {
    let sql = 'SELECT FROM Ribbons WHERE Id = \"' + ribbon.id + '\"';
    return this.storage.query(sql);
  }

  // Get all ribbons from our Ribbons table
  getRibbons() {
    let sql = 'SELECT * FROM Ribbons';
    return this.storage.query(sql);
  }

  // Get all medals from our Medals table
  getMedals() {
    let sql = 'SELECT * FROM Medals';
    return this.storage.query(sql);
  }

  //Set all ribbons to our Ribbons table and set Total count to 0
  private initRibbons() {
    let sql = 'INSERT OR IGNORE INTO Ribbons (Id, Total) VALUES (?,?)';
    this.trophyService.getRibbons().forEach((ribbon)=> {
      this.storage.query(sql, [ribbon.id, 0]);
    });
  }

  //Set all medals to our Medals table and set Total count to 0
  private initMedals() {
    let sql = 'INSERT OR IGNORE INTO Medals (Id, Total, RibbonId, RibbonCap) VALUES (?,?,?,?)';
    this.trophyService.getMedals().forEach((medal) => {
      console.log('medal', medal);
      this.storage.query(sql, [medal.id, 0, medal.ribbon.id, medal.ribbon.cap]);
    });
  }

}
