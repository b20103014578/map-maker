import { Injectable, ElementRef } from '@angular/core'

import { CanvasService } from './canvas.service';
import { SetService } from './set.service';
import { PaletteService } from './palette.service';
import { MoveService } from './move.service';

@Injectable()
export class DrawService {
    fps: number;

    constructor(
        private canvasService: CanvasService,
        private setService: SetService,
        private paletteService: PaletteService,
        private moveService: MoveService) { }

    drawMap(): void {
        this.clearCanvas();
        this.drawTile();
        this.drawMove();
        this.drawObject();
        this.drawContour();
    }

    clearCanvas(): void {
        this.canvasService.context.fillStyle = "#FFF";
        this.canvasService.context.fillRect(this.canvasService.locationX, this.canvasService.locationY, this.canvasService.clientWidth, this.canvasService.clientHeight);
    }

    drawTile(): void {
        for (var x = this.canvasService.locationX; x <= Math.ceil(this.canvasService.clientWidth / this.canvasService.blockWidth); x++) {
            for (var y = this.canvasService.locationY; y <= Math.ceil(this.canvasService.clientHeight / this.canvasService.blockHeight); y++) {
                if (this.canvasService.tileData[x][y] != 0) {
                    this.canvasService.context.drawImage(<HTMLImageElement>document.getElementsByClassName('tile')[this.canvasService.tileData[x][y] - 1],
                        x * this.canvasService.blockWidth,
                        y * this.canvasService.blockHeight,
                        this.canvasService.blockWidth,
                        this.canvasService.blockHeight);
                }
            }
        }
    }

    drawMove(): void {
        if (this.paletteService.selectCategory != 'Move')
            return;

        for (var x = this.canvasService.locationX; x <= Math.ceil(this.canvasService.clientWidth / this.canvasService.blockWidth); x++) {
            for (var y = this.canvasService.locationY; y <= Math.ceil(this.canvasService.clientHeight / this.canvasService.blockHeight); y++) {
                if (this.canvasService.moveData[x][y] != 0) {
                    this.canvasService.context.fillStyle = this.moveService.lists[this.canvasService.moveData[x][y] - 1].rgba;
                    this.canvasService.context.fillRect(x * this.canvasService.blockWidth,
                        y * this.canvasService.blockHeight,
                        this.canvasService.blockWidth,
                        this.canvasService.blockHeight);
                }
            }
        }
    }

    drawObject(): void {
        if (!this.canvasService.objectData.length)
            return;

        for (var i = 0; i < this.canvasService.objectData.length; i++) {
            this.canvasService.context.drawImage(
                <HTMLImageElement>document.getElementsByClassName('object')[this.canvasService.objectData[i].data],
                this.canvasService.objectData[i].x,
                this.canvasService.objectData[i].y);

        }
    }

    drawContour(): void {
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
    }

    drawStart(fps: number): void {
        setInterval(
            (function () {
                this.drawMap();
            }).bind(this),
            1000 / fps);
    }
}