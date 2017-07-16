"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable: member-ordering forin */
var core_1 = require("@angular/core");
require("rxjs/add/operator/debounceTime");
require("rxjs/add/operator/distinctUntilChanged");
require("rxjs/add/operator/switchMap");
var Subject_1 = require("rxjs/Subject");
var wikipedia_service_1 = require("./wikipedia.service");
var WikiSmartComponent = (function () {
    function WikiSmartComponent(wikipediaService) {
        this.wikipediaService = wikipediaService;
        this.searchTermStream = new Subject_1.Subject();
    }
    WikiSmartComponent.prototype.search = function (term) { this.searchTermStream.next(term); };
    WikiSmartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.items = this.searchTermStream
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap(function (term) { return _this.wikipediaService.search(term); });
    };
    return WikiSmartComponent;
}());
WikiSmartComponent = __decorate([
    core_1.Component({
        selector: 'my-wiki-smart',
        template: "\n    <h1>Smarter Wikipedia Demo</h1>\n    <p>Search when typing stops</p>\n    <input #term (keyup)=\"search(term.value)\"/>\n    <ul>\n      <li *ngFor=\"let item of items | async\">{{item}}</li>\n    </ul>",
        providers: [wikipedia_service_1.WikipediaService]
    }),
    __metadata("design:paramtypes", [wikipedia_service_1.WikipediaService])
], WikiSmartComponent);
exports.WikiSmartComponent = WikiSmartComponent;
//# sourceMappingURL=wiki-smart.component.js.map