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
var draw_service_1 = require('../service/draw.service');
var palette_service_1 = require('../service/palette.service');
var canvas_tile_service_1 = require('../service/canvas-tile.service');
var canvas_move_service_1 = require('../service/canvas-move.service');
var canvas_object_service_1 = require('../service/canvas-object.service');
var CanvasComponent = (function () {
    function CanvasComponent(canvasService, drawService, paletteService, canvasTileService, canvasMoveService, canvasObjectService) {
        this.canvasService = canvasService;
        this.drawService = drawService;
        this.paletteService = paletteService;
        this.canvasTileService = canvasTileService;
        this.canvasMoveService = canvasMoveService;
        this.canvasObjectService = canvasObjectService;
    }
    CanvasComponent.prototype.initialCanvasData = function () {
        this.canvasService.canvasDom = this.canvasDom;
        this.canvasService.context = this.canvasDom.nativeElement.getContext("2d");
        this.canvasService.locationX = 0;
        this.canvasService.locationY = 0;
        /* Input by user */
        this.canvasService.canvasWidth = 100;
        this.canvasService.canvasHeight = 100;
        this.canvasService.blockWidth = 40;
        this.canvasService.blockHeight = 40;
        /* Initial tile and git data */
        this.canvasService.tileData = [];
        this.canvasService.moveData = [];
        for (var x = 0; x < this.canvasService.canvasWidth; x++) {
            this.canvasService.tileData[x] = [];
            this.canvasService.moveData[x] = [];
            for (var y = 0; y < this.canvasService.canvasHeight; y++) {
                this.canvasService.tileData[x][y] = 0;
                this.canvasService.moveData[x][y] = 1;
            }
        }
        this.canvasService.objectData = [];
    };
    CanvasComponent.prototype.writeCanvasData = function (mouseX, mouseY, rightClick) {
        var canvasX = Math.floor(mouseX / this.canvasService.blockWidth);
        var canvasY = Math.floor(mouseY / this.canvasService.blockHeight);
        if (this.canvasService.drawing == false)
            return;
        switch (this.paletteService.selectCategory) {
            case 'Tile':
                this.canvasTileService.writeTileData(canvasX, canvasY, rightClick);
                break;
            case 'Move':
                this.canvasMoveService.writeMoveData(canvasX, canvasY);
                break;
            case 'Object':
                this.canvasObjectService.writeObjectData(mouseX, mouseY, rightClick);
                break;
        }
    };
    CanvasComponent.prototype.ngOnInit = function () {
        this.initialCanvasData();
        this.canvasService.clientWidth = this.canvasDom.nativeElement.clientWidth;
        this.canvasService.clientHeight = this.canvasDom.nativeElement.clientHeight;
        this.drawService.drawStart(60);
    };
    CanvasComponent.prototype.onResize = function (event) {
        this.canvasService.clientWidth = this.canvasDom.nativeElement.clientWidth;
        this.canvasService.clientHeight = this.canvasDom.nativeElement.clientHeight;
    };
    // @HostListener('window:keydown', ['$event'])
    // onKeyEvent(event: any){
    //     if(event.key == 'Escape'){
    //         if(this.paletteService.selectCategory == 0 && this.paletteService.selectTitle != null)
    //             this.paletteService.selectTitle = null;
    //     }
    // }
    CanvasComponent.prototype.onMouseEvent = function (event) {
        var mouseX = event.offsetX;
        var mouseY = event.offsetY;
        var rightClick = (event.which == 3);
        switch (event.type) {
            case 'mousewheel':
                // console.log(event.type);
                break;
            case 'mouseup':
                // console.log(event.type);
                this.canvasService.drawing = false;
                break;
            case 'mousedown':
                // console.log(event);
                this.canvasService.drawing = true;
                this.writeCanvasData(mouseX, mouseY, rightClick);
                break;
            case 'mousemove':
                // console.log(event.type);
                this.writeCanvasData(mouseX, mouseY, rightClick);
                break;
            default:
                console.log(event);
                break;
        }
    };
    __decorate([
        core_1.ViewChild('canvas'), 
        __metadata('design:type', core_1.ElementRef)
    ], CanvasComponent.prototype, "canvasDom", void 0);
    __decorate([
        core_1.HostListener('window:resize', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], CanvasComponent.prototype, "onResize", null);
    CanvasComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-canvas',
            templateUrl: 'canvas.component.html',
            styleUrls: ['canvas.component.css']
        }), 
        __metadata('design:paramtypes', [canvas_service_1.CanvasService, draw_service_1.DrawService, palette_service_1.PaletteService, canvas_tile_service_1.CanvasTileService, canvas_move_service_1.CanvasMoveService, canvas_object_service_1.CanvasObjectService])
    ], CanvasComponent);
    return CanvasComponent;
}());
exports.CanvasComponent = CanvasComponent;
//# sourceMappingURL=canvas.component.js.map