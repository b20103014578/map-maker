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
var object_service_1 = require('../../service/object.service');
var ObjectComponent = (function () {
    function ObjectComponent(paletteService, objectService) {
        this.paletteService = paletteService;
        this.objectService = objectService;
    }
    ObjectComponent.prototype.onSelectObjectCategory = function (selectNum) {
        if (this.paletteService.selectObjectCategory == selectNum)
            this.paletteService.selectObjectCategory = null;
        else
            this.paletteService.selectObjectCategory = selectNum;
    };
    ObjectComponent.prototype.onSelectObject = function (selectNum) {
        this.paletteService.selectObject = selectNum;
    };
    ObjectComponent.prototype.ngOnInit = function () {
    };
    ObjectComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-object',
            templateUrl: 'object.component.html',
            styleUrls: ['object.component.css']
        }), 
        __metadata('design:paramtypes', [palette_service_1.PaletteService, object_service_1.ObjectService])
    ], ObjectComponent);
    return ObjectComponent;
}());
exports.ObjectComponent = ObjectComponent;
//# sourceMappingURL=object.component.js.map