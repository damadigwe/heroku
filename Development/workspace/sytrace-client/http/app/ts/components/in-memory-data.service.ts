
import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {

    const heroes = [
      { id: 0,  name: 'Zero' },
      { id: 11, name: 'Mr. Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];

    
      const assets = [
          {
              "categoryId": 1,
              "subCategoryId": 1,
              "title": "First Folk Tale",
              "text": "Here comes Mbe - the crafty",
              "tag": "Mbe",
              "attachmentOneId": 1,
              "attachmentTwoId": 0,
              "attachmentThreeId": 0,
              "attachmentFourId": 0,
              "thumpsUp": 0,
              "thumpsDown": 0,
              "postedById": 0,
              "publishedId": 0,
              "lastModifiedById": 0,
              "publishedTimeStamp": "04/07/2017",
              "status": "Active",
              "mockImageUrl" : "../app/resources/images/ng-book-2-minibook.png"
          },
          {
              "categoryId": 1,
              "subCategoryId": 1,
              "title": "First Folk Tale 2",
              "text": "Mbe na umu anumanu",
              "tag": "Mbe na umu anumanu",
              "attachmentOneId": 2,
              "attachmentTwoId": 0,
              "attachmentThreeId": 0,
              "attachmentFourId": 0,
              "thumpsUp": 0,
              "thumpsDown": 0,
              "postedById": 0,
              "publishedId": 0,
              "lastModifiedById": 0,
              "publishedTimeStamp": "05/07/2017",
              "status": "Active",
              "mockImageUrl" : "../app/resources/images/ng-book-2-minibook.png"
          }
          ,
          {
              "categoryId": 1,
              "subCategoryId": 1,
              "title": "First Folk Tale 3",
              "text": "Mbe na umu anumanu 3",
              "tag": "Mbe na umu anumanu 3",
              "attachmentOneId": 2,
              "attachmentTwoId": 0,
              "attachmentThreeId": 0,
              "attachmentFourId": 0,
              "thumpsUp": 0,
              "thumpsDown": 0,
              "postedById": 0,
              "publishedId": 0,
              "lastModifiedById": 0,
              "publishedTimeStamp": "05/07/2017",
              "status": "Active",
              "mockImageUrl" : "../app/resources/images/ng-book-2-minibook.png"
          }
          ,
          {
              "categoryId": 1,
              "subCategoryId": 1,
              "title": "First Folk Tale 4",
              "text": "Mbe na umu anumanu 4",
              "tag": "Mbe na umu anumanu 4",
              "attachmentOneId": 4,
              "attachmentTwoId": 0,
              "attachmentThreeId": 0,
              "attachmentFourId": 0,
              "thumpsUp": 0,
              "thumpsDown": 0,
              "postedById": 0,
              "publishedId": 0,
              "lastModifiedById": 0,
              "publishedTimeStamp": "05/07/2017",
              "status": "Active",
              "mockImageUrl" : "../app/resources/images/ng-book-2-minibook.png"
          }
      ];

    return {
    heroes, 
    assets
    // can comment out each return entry, safely as project progresses - see InMemoryWebApiModule.forRoot(InMemoryDataService, {passThruUnknownUrl : true}), 
    };
  }
} 


/*
import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
  getHeroes(): Hero[] {
    return HEROES;
  }
}
*/