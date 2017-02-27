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
var palette_service_1 = require('../../service/palette.service');
var tile_service_1 = require('../../service/tile.service');
var TileComponent = (function () {
    function TileComponent(paletteService, tileService) {
        this.paletteService = paletteService;
        this.tileService = tileService;
    }
    TileComponent.prototype.onSelectTileCategory = function (selectNum) {
        if (this.paletteService.selectTitleCategory == selectNum)
            this.paletteService.selectTitleCategory = null;
        else
            this.paletteService.selectTitleCategory = selectNum;
    };
    TileComponent.prototype.onSelectTile = function (selectNum) {
        this.paletteService.selectTitle = selectNum;
    };
    TileComponent.prototype.ngOnInit = function () {
    };
    TileComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-tile',
            templateUrl: 'tile.component.html',
            styleUrls: ['tile.component.css']
        }), 
        __metadata('design:paramtypes', [palette_service_1.PaletteService, tile_service_1.TileService])
    ], TileComponent);
    return TileComponent;
}());
exports.TileComponent = TileComponent;
//# sourceMappingURL=tile.component.js.map