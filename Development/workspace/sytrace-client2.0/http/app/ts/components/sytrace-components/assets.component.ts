/**
 * Created by damadigwe on 7/3/17.
 */

import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Asset }                from './model/asset';
import { AssetService }         from './asset.service';


@Component({
    selector: 'sytrace-assets',
    //templateUrl: '/asset.component.html',

	template: `
	<h2>Sytrace Assets</h2>
	<div>
        <label>Asset title:</label> <input #title />
        <button (click)="add(heroName.value); heroName.value=''">
            Add
        </button>
	</div>


	<br>

        <div  *ngFor="let asset of assets" >
            <div class="col-sm-6 col-md-3" >
                    <div class="thumbnail">
                        <img src="{{asset.mockImageUrl}}">

                        <div class="caption">
                            <h3>{{asset.assetId}}</h3>
                            <p>{{asset.title}}</p>
                            <p>{{asset.text}}</p>
                            <p><a href="" class="btn btn-default" role="button">Detail</a>
                                <button class="delete"
                                (click)="delete(hero); $event.stopPropagation()">x</button>
                            </p>
                        </div>

                    </div>
                </div>
        </div>

	`
	,

// TODO
// styleUrls: [ './heroes.component.css' ]

styles:

    [
`
.selected {
    background-color: #CFD8DC !important;
    color: white;
}
.heroes {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
}
.heroes li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
}
.heroes li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
}
.heroes li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
}
.heroes .text {
    position: relative;
    top: -3px;
}
.heroes .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
}
button {
    font-family: Arial;
    background-color: #eee;
    border: none;
    padding: 5px 10px;
    border-radius: 4px;
    cursor: pointer;
    cursor: hand;
}
button:hover {
    background-color: #cfd8dc;
}
button.delete {
    float:right;
    margin-top: 2px;
    margin-right: .8em;
    background-color: gray !important;
    color:white;
}
`,

`
[class*='col-'] {
    float: left;
    padding-right: 20px;
    padding-bottom: 20px;
}
[class*='col-']:last-of-type {
    padding-right: 0;
}
a {
    text-decoration: none;
}
*, *:after, *:before {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
h3 {
    text-align: center; margin-bottom: 0;
}
h4 {
    position: relative;
}
.grid {
    margin: 0;
}
.col-1-4 {
    width: 25%;
}
.module {
    padding: 20px;
    text-align: center;
    color: #eee;
    max-height: 120px;
    min-width: 120px;
    background-color: #607D8B;
    border-radius: 2px;
}
.module:hover {
    background-color: #EEE;
    cursor: pointer;
    color: #607d8b;
}
.grid-pad {
    padding: 10px 0;
}
.grid-pad > [class*='col-']:last-of-type {
    padding-right: 20px;
}
@media (max-width: 600px) {
.module {
        font-size: 10px;
        max-height: 75px; }
}
@media (max-width: 1024px) {
.grid {
    margin: 0;
    }
    .module {
    min-width: 60px;
    }
    }
`

]
,


})
export class AssetsComponent implements OnInit {
    assets: Asset[];
   // selectedHero: Hero;

    constructor(
        private assetService: AssetService,
        private router: Router) { }

    getAssets(): void {

        this.assetService
            .getAssets()
            .then(assets => this.assets = assets); // uncomment for non mock
        // console.log('assets:'+ this.assets);
        //this.assets = this.assetService.getAssets();

    }

    ngOnInit(): void {
        this.getAssets();
    }

    /*add(name: string): void {
        name = name.trim();
        if (!name) { return; }
        this.heroService.create(name)
            .then(hero => {
                this.heroes.push(hero);
                this.selectedHero = null;
            });
    }

    delete(hero: Hero): void {
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
