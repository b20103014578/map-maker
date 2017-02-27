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
var objectType = (function () {
    function objectType() {
    }
    return objectType;
}());
exports.objectType = objectType;
var CanvasService = (function () {
    function CanvasService() {
        this.drawing = false;
    }
    CanvasService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], CanvasService);
    return CanvasService;
}());
exports.CanvasService = CanvasService;
//# sourceMappingURL=canvas.service.js.map