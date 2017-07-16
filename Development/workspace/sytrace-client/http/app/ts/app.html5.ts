/*
 * Angular Imports
 */
//import {
//  NgModule,
//  Component
//} from '@angular/core';
//import {BrowserModule} from '@angular/platform-browser';
//import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
//import {
////  RouterModule,
//  Routes
//} from '@angular/router';
//import {LocationStrategy, HashLocationStrategy} from '@angular/common';

/*
 * Components
 */
//import {HomeComponent} from 'components/HomeComponent';
//import {AboutComponent} from 'components/AboutComponent';
//mport {ContactComponent} from 'components/ContactComponent';



/*


import {
  RouterModule,
  Routes
} from '@angular/router';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

import {Component} from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HttpModule, JsonpModule} from '@angular/http';
import { FormsModule ,
  		ReactiveFormsModule
  	   } from '@angular/forms';

// our ts file imports
// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from 'components/in-memory-data.service';


import { AppRoutingModule } from 'components/app-routing.module';

import { DashboardComponent }   from 'components/dashboard.component';
import { HeroesComponent }      from 'components/heroes.component';
import { HeroDetailComponent }  from 'components/hero-detail.component';
import { HeroService }          from 'components/hero.service';
import { HeroSearchComponent }  from 'components/hero-search.component';

import { requestOptionsProvider }   from 'components/default-request-options.service';
import { WikiComponent }      from 'components/wiki/wiki.component';
import { WikiSmartComponent } from 'components/wiki/wiki-smart.component';

import {HomeComponent} from 'components/HomeComponent';
import {AboutComponent} from 'components/AboutComponent';
import {ContactComponent} from 'components/ContactComponent';

import { AssetService }          from 'components/sytrace-components/asset.service';


import {DemoFormSku} from
  'components/sytrace-components/demo_form_sku';
import {DemoFormSkuBuilder} from
  'components/sytrace-components/demo_form_sku_with_builder';
import {DemoFormWithValidationsShorthand} from
  'components/sytrace-components/demo_form_with_validations_shorthand';
import {DemoFormWithValidationsExplicit} from
  'components/sytrace-components/demo_form_with_validations_explicit';
import {AddAssetForm} from
   'components/sytrace-components/add.asset.component';
import {DemoFormWithEvents} from
   'components/sytrace-components/demo_form_with_events';
import {DemoFormNgModel} from
  'components/sytrace-components/demo_form_ng_model';
  

import { SimpleHTTPComponent } from 'components/SimpleHTTPComponent';
import { MoreHTTPRequests } from 'components/MoreHTTPRequests';
import {
  YouTubeSearchComponent,
  SearchBox,
  SearchResultComponent
} from 'components/YouTubeSearchComponent';

import { AssetsComponent } from 'components/sytrace-components/assets.component';

import { youTubeServiceInjectables } from 'components/YouTubeSearchComponent';

// require('css/styles.scss');
 require('css/harmonise.css');// me
 require('css/base-groups.css');// me
 require('css/sytrace.css');// me
 //require('css/bootstrap.min.3.3.7.css');// me
 require('css/ie.css');// me
// require('resources/systemjs.config.js');  // me - not needed since using webpack?
 require('resources/images/ng-book-2-minibook.png');  // me
 require('resources/images/favicon-32x32.png');  // me
 require('ts/components/app.component.css');  // me
 require('ts/components/dashboard.component.html');  // me
 require('ts/components/heroes.component.html');  // me
 require('ts/components/sytrace-components/add.asset.component.html');  // me
 //require('../css/styles.css');
//require('ts/components/sytrace-components/model/assets.json');  // me

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'contactus', redirectTo: 'contact' },
];


require('css/styles.css');

@Component({
  selector: 'router-app',
  template: `
  <div>
    <nav>
      <a>Navigation:</a>
      <ul>
        <li><a [routerLink]="['home']">Home</a></li>
        <li><a [routerLink]="['about']">About</a></li>
        <li><a [routerLink]="['contact']">Contact us</a></li>
      </ul>
    </nav>

    <router-outlet></router-outlet>
  </div>
  `
})
class RoutesDemoApp {
}

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'contactus', redirectTo: 'contact' },
];

@NgModule({
  declarations: [
    RoutesDemoApp,
    HomeComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes) // <-- routes
  ],
  bootstrap: [ RoutesDemoApp ],
  providers: [ ]
})
class RoutesDemoAppModule {}

platformBrowserDynamic().bootstrapModule(RoutesDemoAppModule)
  .catch((err: any) => console.error(err));
*/