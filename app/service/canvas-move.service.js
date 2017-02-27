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
var CanvasMoveService = (function () {
    function CanvasMoveService(canvasService, paletteService) {
        this.canvasService = canvasService;
        this.paletteService = paletteService;
    }
    CanvasMoveService.prototype.writeMoveData = function (canvasX, canvasY) {
        if (this.paletteService.selectMove != null)
            this.canvasService.moveData[canvasX][canvasY] = this.paletteService.selectMove + 1;
    };
    CanvasMoveService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [canvas_service_1.CanvasService, palette_service_1.PaletteService])
    ], CanvasMoveService);
    return CanvasMoveService;
}());
exports.CanvasMoveService = CanvasMoveService;
//# sourceMappingURL=canvas-move.service.js.map