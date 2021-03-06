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
var core_1 = require('@angular/core');
var palette_service_1 = require('../service/palette.service');
var CategoryList = [
    'Tile',
    'Move',
    'Object'
];
var TitleList = [
    'Tile List',
    'Move Mode',
    'Object List'
];
var PaletteComponent = (function () {
    function PaletteComponent(paletteService) {
        this.paletteService = paletteService;
    }
    PaletteComponent.prototype.onSelectCategory = function (selectNum) {
        this.paletteService.selectCategory = CategoryList[selectNum];
        this.title = TitleList[selectNum];
    };
    PaletteComponent.prototype.ngOnInit = function () {
        this.categoryList = CategoryList;
        this.onSelectCategory(0);
    };
    PaletteComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-palette',
            templateUrl: 'palette.component.html',
            styleUrls: ['palette.component.css']
        }), 
        __metadata('design:paramtypes', [palette_service_1.PaletteService])
    ], PaletteComponent);
    return PaletteComponent;
}());
exports.PaletteComponent = PaletteComponent;
//# sourceMappingURL=palette.component.js.map