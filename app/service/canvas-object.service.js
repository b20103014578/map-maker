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
var canvas_service_1 = require('../service/canvas.service');
var palette_service_1 = require('../service/palette.service');
var CanvasObjectService = (function () {
    function CanvasObjectService(canvasService, paletteService) {
        this.canvasService = canvasService;
        this.paletteService = paletteService;
    }
    CanvasObjectService.prototype.createObjectData = function (canvasX, canvasY, index) {
        this.canvasService.objectData.push({ x: canvasX, y: canvasY, data: index });
    };
    CanvasObjectService.prototype.writeObjectData = function (canvasX, canvasY, rightClick) {
        if (this.paletteService.selectObject != null) {
            console.log(this.paletteService.selectObject);
            this.createObjectData(canvasX, canvasY, this.paletteService.selectObject);
            this.paletteService.selectObject = null;
        }
        else {
        }
    };
    CanvasObjectService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [canvas_service_1.CanvasService, palette_service_1.PaletteService])
    ], CanvasObjectService);
    return CanvasObjectService;
}());
exports.CanvasObjectService = CanvasObjectService;
//# sourceMappingURL=canvas-object.service.js.map