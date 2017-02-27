import { Component, ViewChild, ElementRef, HostListener, OnInit } from '@angular/core';

import { CanvasService } from '../service/canvas.service';
import { DrawService } from '../service/draw.service';
import { PaletteService } from '../service/palette.service';

import { CanvasTileService } from '../service/canvas-tile.service';
import { CanvasMoveService } from '../service/canvas-move.service';
import { CanvasObjectService } from '../service/canvas-object.service'

@Component({
    moduleId: module.id,
    selector: 'my-canvas',
    templateUrl: 'canvas.component.html',
    styleUrls: ['canvas.component.css']
})

export class CanvasComponent implements OnInit {
    @ViewChild('canvas') canvasDom: ElementRef;

    constructor(
        private canvasService: CanvasService,
        private drawService: DrawService,
        private paletteService: PaletteService,
        private canvasTileService: CanvasTileService,
        private canvasMoveService: CanvasMoveService,
        private canvasObjectService: CanvasObjectService) { }

    initialCanvasData(): void {
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
    }

    writeCanvasData(mouseX: number, mouseY: number, rightClick: boolean): void {
        var canvasX = Math.floor(mouseX / this.canvasService.blockWidth);
        var canvasY = Math.floor(mouseY / this.canvasService.blockHeight);

        if (this.canvasService.drawing == false)
            return;

        switch (this.paletteService.selectCategory) {
            case 'Tile': //tileData
                this.canvasTileService.writeTileData(canvasX, canvasY, rightClick);
                break;
            case 'Move': //moveData
                this.canvasMoveService.writeMoveData(canvasX, canvasY);
                break;
            case 'Object':
                this.canvasObjectService.writeObjectData(mouseX, mouseY, rightClick);
                break;
        }
    }

    ngOnInit() {
        this.initialCanvasData();
        this.canvasService.clientWidth = this.canvasDom.nativeElement.clientWidth;
        this.canvasService.clientHeight = this.canvasDom.nativeElement.clientHeight;

        this.drawService.drawStart(60);
    }

    @HostListener('window:resize', ['$event'])
    onResize(event: any) {
        this.canvasService.clientWidth = this.canvasDom.nativeElement.clientWidth;
        this.canvasService.clientHeight = this.canvasDom.nativeElement.clientHeight;
    }

    // @HostListener('window:keydown', ['$event'])
    // onKeyEvent(event: any){
    //     if(event.key == 'Escape'){
    //         if(this.paletteService.selectCategory == 0 && this.paletteService.selectTitle != null)
    //             this.paletteService.selectTitle = null;
    //     }
    // }

    onMouseEvent(event: any) {
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
    }
}