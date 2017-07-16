

/*
 * Angular Imports
 */

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
import { InMemoryDataService }  from './components/in-memory-data.service';


/*
 * Components
 */
 
import { AppRoutingModule } from './components/app-routing.module';

import { DashboardComponent }   from './components/dashboard.component';
import { HeroesComponent }      from './components/heroes.component';
import { HeroDetailComponent }  from './components/hero-detail.component';
import { HeroService }          from './components/hero.service';
import { HeroSearchComponent }  from './components/hero-search.component';

import { requestOptionsProvider }   from './components/default-request-options.service';
import { WikiComponent }      from './components/wiki/wiki.component';
import { WikiSmartComponent } from './components/wiki/wiki-smart.component';

import {HomeComponent} from './components/HomeComponent';
import {AboutComponent} from './components/AboutComponent';
import {ContactComponent} from './components/ContactComponent';

import { AssetService }          from './components/sytrace-components/asset.service';

/* 
 * Our Demos
 */
import {DemoFormSku} from
  './components/sytrace-components/demo_form_sku';
import {DemoFormSkuBuilder} from
  './components/sytrace-components/demo_form_sku_with_builder';
import {DemoFormWithValidationsShorthand} from
  './components/sytrace-components/demo_form_with_validations_shorthand';
import {DemoFormWithValidationsExplicit} from
  './components/sytrace-components/demo_form_with_validations_explicit';
import {AddAssetComponent} from
   './components/sytrace-components/add.asset.component';
import {DemoFormWithEvents} from
   './components/sytrace-components/demo_form_with_events';
import {DemoFormNgModel} from
  './components/sytrace-components/demo_form_ng_model';
  
  
/*
 * Components
 */
import { SimpleHTTPComponent } from './components/SimpleHTTPComponent';
import { MoreHTTPRequests } from './components/MoreHTTPRequests';
import {
  YouTubeSearchComponent,
  SearchBox,
  SearchResultComponent
} from './components/YouTubeSearchComponent';

import { AssetsComponent } from './components/sytrace-components/assets.component';
/*
 * Injectables
 */
import { youTubeServiceInjectables } from './components/YouTubeSearchComponent';

import '../css/sytrace.css';
import './components/heroes.component.html';
 
 /* 
 * We're using Webpack to load our CSS and html, which is why we use `require` instead of
 * `import` here
 */
// require('css/styles.scss');
 require('../css/harmonise.css');// me
 require('../css/base-groups.css');// me
// require('../css/sytrace.css');// me
 //require('../css/bootstrap.min.3.3.7.css');// me
 require('../css/ie.css');// me
// require('../resources/systemjs.config.js');  // me - not needed since using webpack?
// require('../resources/images/ng-book-2-minibook.png');  // me
// require('../resources/images/favicon-32x32.png');  // me
// require('./components/app.component.css');  // me
 require('./components/dashboard.component.html');  // me
 require('./components/heroes.component.html');  // me
 require('./components/sytrace-components/add.asset.component.html');  // me
 //require('../css/sytrace.css');

//require('./components/sytrace-components/model/assets.json');  // me

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'contactus', redirectTo: 'contact' },
];

/*
 * Webpack
 */
@Component({

  selector: 'http-app',

  template: `

<div id="#wrap">

    <div id="header" class="group">

            <div id="headerLogo">
                <img src="resources/images/ng-book-2-minibook.png" alt="sytrace" id="sytrace" />
            </div>

            <div id="nav" class="group">
                <ul class="group">
                    <li><a [routerLink]="['home']">Home</a></li>
                    <li><a routerLink="/dashboard" routerLinkActive="active">Dashboard</a></li>
                    <li><a routerLink="/heroes" routerLinkActive="active">Heroes</a></li>
                    <li><a [routerLink]="['addAsset']">Add Asset</a></li>

                    <li><a [routerLink]="['home']">Blog</a></li>
                    <li><a [routerLink]="['about']">About</a></li>
                    <li><a [routerLink]="['contact']">Contact us</a></li>
                    <li><a [routerLink]="['contact']">Login/Register</a></li>
                </ul>
          </div>

    </div> <!-- /header -->

    <hr />

    <div id="container">
            <router-outlet>
                <youtube-search></youtube-search>
            </router-outlet>

            <!--  <simple-http></simple-http>
            <hr/>
            <more-http></more-http>
            <hr/>
            <my-wiki></my-wiki> -->
            <my-wiki-smart></my-wiki-smart>
            
        <hr/>    
		<demo-form-ng-model></demo-form-ng-model>
		<hr/>
		<demo-form-with-events></demo-form-with-events>
		<hr/>
		<!--
		working on this - invoking it as actual addAsset form for sytrace, via routing 
		<demo-form-with-custom-validations></demo-form-with-custom-validations>
		 -->
		<hr/>
		<demo-form-with-validations-shorthand></demo-form-with-validations-shorthand>
		<hr/>
		<demo-form-with-validations-explicit></demo-form-with-validations-explicit>
		<hr/>
		<demo-form-sku-builder></demo-form-sku-builder>
		<hr/>
		<demo-form-sku></demo-form-sku>
    </div>

    <div id="clearFooter">

    </div>

</div> <!-- /wrap -->


<div id="footer">
    Copyright &copy; 2017.  Agile systems.
</div>

`,
 //styleUrls: ['/components/app.component.css']
})
class HttpApp {
}

@NgModule({

  declarations: [
  
    HttpApp,
    SimpleHTTPComponent,
    MoreHTTPRequests,
    YouTubeSearchComponent,
    WikiComponent,
    WikiSmartComponent,
    SearchBox,
    SearchResultComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
    HeroSearchComponent,
    AssetsComponent,
    
    DemoFormSku,
    DemoFormSkuBuilder,
    DemoFormWithValidationsShorthand,
    DemoFormWithValidationsExplicit,
    AddAssetComponent,
    DemoFormWithEvents,
    DemoFormNgModel
    
  ],
  
  imports: [
    BrowserModule,
  //  RouterModule.forRoot(routes),
  //    InMemoryWebApiModule.forRoot(InMemoryDataService, {passThruUnknownUrl : true}),  // to make this supersede HttpModule, import it last; and vice versa
     
    HttpModule, 
    JsonpModule,
    FormsModule,
    
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
      InMemoryWebApiModule.forRoot(InMemoryDataService, {passThruUnknownUrl : true}),  // to make this supersede HttpModule, import it last; and vice versa
     
    AppRoutingModule
  ],
  
  bootstrap: [ HttpApp ],
  
  providers: [
    youTubeServiceInjectables,
    requestOptionsProvider,
    HeroService,
      AssetService,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
    
  ]
  
})
class HttpAppModule {}


platformBrowserDynamic().bootstrapModule(HttpAppModule)
  .catch((err: any) => console.error(err));
