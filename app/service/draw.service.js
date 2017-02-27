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
var canvas_service_1 = require('./canvas.service');
var set_service_1 = require('./set.service');
var palette_service_1 = require('./palette.service');
var move_service_1 = require('./move.service');
var DrawService = (function () {
    function DrawService(canvasService, setService, paletteService, moveService) {
        this.canvasService = canvasService;
        this.setService = setService;
        this.paletteService = paletteService;
        this.moveService = moveService;
    }
    DrawService.prototype.drawMap = function () {
        this.clearCanvas();
        this.drawTile();
        this.drawMove();
        this.drawObject();
        this.drawContour();
    };
    DrawService.prototype.clearCanvas = function () {
        this.canvasService.context.fillStyle = "#FFF";
        this.canvasService.context.fillRect(this.canvasService.locationX, this.canvasService.locationY, this.canvasService.clientWidth, this.canvasService.clientHeight);
    };
    DrawService.prototype.drawTile = function () {
        for (var x = this.canvasService.locationX; x <= Math.ceil(this.canvasService.clientWidth / this.canvasService.blockWidth); x++) {
            for (var y = this.canvasService.locationY; y <= Math.ceil(this.canvasService.clientHeight / this.canvasService.blockHeight); y++) {
                if (this.canvasService.tileData[x][y] != 0) {
                    this.canvasService.context.drawImage(document.getElementsByClassName('tile')[this.canvasService.tileData[x][y] - 1], x * this.canvasService.blockWidth, y * this.canvasService.blockHeight, this.canvasService.blockWidth, this.canvasService.blockHeight);
                }
            }
        }
    };
    DrawService.prototype.drawMove = function () {
        if (this.paletteService.selectCategory != 'Move')
            return;
        for (var x = this.canvasService.locationX; x <= Math.ceil(this.canvasService.clientWidth / this.canvasService.blockWidth); x++) {
            for (var y = this.canvasService.locationY; y <= Math.ceil(this.canvasService.clientHeight / this.canvasService.blockHeight); y++) {
                if (this.canvasService.moveData[x][y] != 0) {
                    this.canvasService.context.fillStyle = this.moveService.lists[this.canvasService.moveData[x][y] - 1].rgba;
                    this.canvasService.context.fillRect(x * this.canvasService.blockWidth, y * this.canvasService.blockHeight, this.canvasService.blockWidth, this.canvasService.blockHeight);
                }
            }
        }
    };
    DrawService.prototype.drawObject = function () {
        if (!this.canvasService.objectData.length)
            return;
        for (var i = 0; i < this.canvasService.objectData.length; i++) {
            this.canvasService.context.drawImage(document.getElementsByClassName('object')[this.canvasService.objectData[i].data], this.canvasService.objectData[i].x, this.canvasService.objectData[i].y);
        }
    };
    DrawService.prototype.drawContour = function () {
        if (this.setService.lists[1].value == false)
            return;
        var totalWidth = this.canvasService.canvasWidth * this.canvasService.blockWidth;
        var totalHeight = this.canvasService.canvasHeight * this.canvasService.blockHeight;
        this.canvasService.context.fillStyle = "#CCC";
        for (var w = 0; w <= this.canvasService.canvasWidth; w++) {
            if (w * this.canvasService.blockWidth > this.canvasService.clientWidth)
                break;
            this.canvasService.context.fillRect(w * this.canvasService.blockHeight, 0, 1, totalHeight);
        }
        for (var h = 0; h <= this.canvasService.canvasHeight; h++) {
            if (h * this.canvasService.blockHeight > this.canvasService.clientHeight)
                break;
            this.canvasService.context.fillRect(0, h * this.canvasService.blockWidth, totalWidth, 1);
        }
        this.canvasService.context.stroke();
    };
    DrawService.prototype.drawStart = function (fps) {
        setInterval((function () {
            this.drawMap();
        }).bind(this), 1000 / fps);
    };
    DrawService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [canvas_service_1.CanvasService, set_service_1.SetService, palette_service_1.PaletteService, move_service_1.MoveService])
    ], DrawService);
    return DrawService;
}());
exports.DrawService = DrawService;
//# sourceMappingURL=draw.service.js.map