/**
 * Created by damadigwe on 7/3/17.
 */

import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Asset } from './model/asset';
//import { ASSETS } from './model/mock.assets';

@Injectable()
export class AssetService {

    private headers = new Headers({'Content-Type': 'application/json'});
    private assetsUrl = 'api/assets';  // URL to web api

    // we can also target json file
    //private assetsUrl = '/model/assets.json'; // URL to JSON file

    constructor(private http: Http) { }

    /*
    getAssets(): Promise<Asset[]> {
        return Promise.resolve(ASSETS);
    }
     */

    getAssets(): Promise<Asset[]> {
        return this.http.get(this.assetsUrl)
            .toPromise()
            .then(response => response.json().data as Asset[])
    .catch(this.handleError);
    }


    /*

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

     */

    create(categoryId : string, subCategoryId : string, title : string,
           tag : string,  attachmentOneId : string, attachmentTwoId : string, attachmentThreeId : string, attachmentFourId : string
           , thumpsUp : string, thumpsDown : string , postedById : string,  publishedId : string,  lastModifiedById : string ,  publishedTimeStamp : string
        , status : string, mockImageUrl : string): Promise<Asset> {
        return this.http
            .post(this.assetsUrl, JSON.stringify({
                categoryId: categoryId,
                subCategoryId: subCategoryId,
                title: title,
                tag: tag,
                attachmentOneId: attachmentOneId,
                attachmentTwoId: attachmentTwoId,
                attachmentThreeId: attachmentThreeId,
                attachmentFourId: attachmentFourId,
                thumpsUp: thumpsUp,
                thumpsDown: thumpsDown,
                postedById: postedById,
                publishedId: publishedId,
                lastModifiedById: lastModifiedById,
                publishedTimeStamp: publishedTimeStamp,
                status: status,
                mockImageUrl: mockImageUrl
            }),


            {headers: this.headers})
            .toPromise()
            .then(res => res.json().data as Asset)
    .catch(this.handleError);
    }


    //TODO - move this to a common service or utility class
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}