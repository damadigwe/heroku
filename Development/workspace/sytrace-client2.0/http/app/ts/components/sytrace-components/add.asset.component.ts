/* tslint:disable:no-string-literal */
import { Component } from '@angular/core';
import { AssetCategory } from './model/asset.category';
import { ASSET_CATEGORIES } from './model/mock.asset.categories';
import { AssetSubCategory } from './model/asset.sub.category';
import { ASSET_SUB_CATEGORIES } from './model/mock.asset.sub.categories';
import { AssetService }         from './asset.service';
import { Asset }                from './model/asset';

import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  FormControl
} from '@angular/forms';
import { Observable } from 'rxjs';
import { RequestOptions, Http,Headers} from '@angular/http';
import { Injectable }    from '@angular/core';



/**
 * Our custom validator
 *
 * A validator:
 * - Takes a `Control` as it's input and
 * - Returns a `StringMap<string, boolean>` where the key is "error code" and
 *   the value is `true` if it fails
 */
function skuValidator(control: FormControl): { [s: string]: boolean } {
  if (!control.value.match(/^123/)) {
    return {invalidSku: true};
  }
}

@Component({
  selector: 'add-asset',
  templateUrl: '/add.asset.component.html'

})
//@Injectable()
export class AddAssetComponent {
    assetCreationFormGroup: FormGroup;
    sku: AbstractControl;
    assetCategory: AbstractControl;
    assetSubCategory: AbstractControl;
    sourceCountry: AbstractControl;
    sourceRegion: AbstractControl;


    assetCategories: AssetCategory[];
    assetSubCategories: AssetSubCategory[];
    http: Http;
    assets: Asset[];
    selectedAsset: Asset;
    assetService: AssetService;

  constructor(http: Http, fb: FormBuilder, assetService: AssetService) {
      this.assetCreationFormGroup = fb.group({
      'sku':  ['', Validators.compose([
        Validators.required, skuValidator])]
    });

      this.sku = this.assetCreationFormGroup.controls['sku'];
      this.assetCategory = this.assetCreationFormGroup.controls['assetCategory'];
      this.assetSubCategory = this.assetCreationFormGroup.controls['assetSubCategory'];
      this.sourceCountry = this.assetCreationFormGroup.controls['sourceCountry'];
      this.sourceRegion = this.assetCreationFormGroup.controls['sourceRegion'];

      this.assetCategories = ASSET_CATEGORIES;
      this.assetSubCategories = ASSET_SUB_CATEGORIES;
      this.http = http;
      this.assetService = assetService;
  }

  onSubmit(value: string): void {
    console.log('you submitted value: ', value);
  }



    fileChange(event)
    {


        let fileList : FileList = event.target.files;
        if(fileList.length > 0)
        {
            let file: File = fileList[0];
            let formData : FormData = new FormData();
            formData.append('uploadFile', file, file.name);
            let headers = new Headers();
           headers.append('Content-Type', 'multipart/form-data');
           // headers.append('enctype', 'multipart/form-data');
            headers.append('Accept', 'application/json');
            let options = new RequestOptions({headers : headers});

            // '${this.apiEndPoint}'
            let heroesUrl = 'api/heroes';  // URL to web api

            this.http.post(heroesUrl, formData, options)
                .map(res => res.json())
                .catch(error => Observable.throw(error))
                .subscribe(
                    data => console.log('upload successful...'),
                    error => console.log(error)
            )
        }

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
    // this.assetService.create(categoryId, subCategoryId, title, text, tag, attachmentOneId, attachmentTwoId, attachmentThreeId, attachmentFourId, thumpsUp, thumpsDown, postedById, publishedId, '04/07/2017', 'Active' ,'../app/resources/images/ng-book-2-minibook.png')

    addAsset(categoryId: string, subCategoryId: string, title: string,
             text: string, tag: string, attachmentOneId: string, attachmentTwoId: string,
             attachmentThreeId: string, attachmentFourId: string, thumpsUp: string , thumpsDown: string, postedById: string, publishedId: string, lastModifiedById: string, publishedTimeStamp: string , status: string, mockImageUrl: string): void {
        categoryId = categoryId.trim();
        if (!categoryId) { return; }
        this.assetService.create(categoryId, subCategoryId, title, text, tag, '1', '2', '3', '4', '0', '0', '-1', '-1', '04/07/2017', 'Active' ,'../app/resources/images/ng-book-2-minibook.png')
            .then(asset => {

                this.assetService
                    .getAssets()
                    .then(assets => this.assets = assets); // uncomment for non mock

                this.assets.push(asset);
                this.selectedAsset = null;
            });
    }

    createAsset(form: FormGroup)
    {
       // this.assetForm.controls['sku']
       // this.sku = this.assetCreationFormGroup.controls['sku'];

      //  console.log('form.assetCategory.value:',  this.assetCreationFormGroup.controls['assetCategory'].value );
        console.log('form.assetCategory.value:',  this.assetCreationFormGroup );
       // console.log('form.assetCategory.value:',  this.assetCategory.value );
        console.log('You submitted asset form - value:', form.value);
        // let categoryId: string = assetCategory.value;

       // heroName.value); heroName.value='
        // assetCategory
        // assetSubCategory
        // sourceCountry
        // sourceRegion
        // description // text
        // tag
        // attachment1
        // attachment2
        // attachment3
        // attachment4
        //

        //addAsset(categoryId: string, subCategoryId: string, title: string,
        //text: string, tag: string, attachmentOneId: string, attachmentTwoId: string,
        //attachmentThreeId: string, attachmentFourId: string, thumpsUp: string , thumpsDown: string, postedById: string, publishedId: string, lastModifiedById: string, publishedTimeStamp: string , status: string, mockImageUrl: string):

    }

   /* delete(hero: Hero): void {
        this.heroService
            .delete(hero.id)
            .then(() => {
                this.heroes = this.heroes.filter(h => h !== hero);
                if (this.selectedHero === hero) { this.selectedHero = null; }
            });
    }

    ngOnInit(): void {
        this.getHeroes();
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }*/

}

