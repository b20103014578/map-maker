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
var move_service_1 = require('../../service/move.service');
var MoveComponent = (function () {
    function MoveComponent(paletteService, moveService) {
        this.paletteService = paletteService;
        this.moveService = moveService;
    }
    MoveComponent.prototype.onSelectMove = function (selectNum) {
        this.paletteService.selectMove = selectNum;
    };
    MoveComponent.prototype.ngOnInit = function () {
    };
    MoveComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-move',
            templateUrl: 'move.component.html',
            styleUrls: ['move.component.css']
        }), 
        __metadata('design:paramtypes', [palette_service_1.PaletteService, move_service_1.MoveService])
    ], MoveComponent);
    return MoveComponent;
}());
exports.MoveComponent = MoveComponent;
//# sourceMappingURL=move.component.js.map