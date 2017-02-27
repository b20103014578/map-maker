import { Injectable, ElementRef } from '@angular/core';

export class objectType{
    x: number;
    y: number;
    data: number;
}

@Injectable()
export class CanvasService{
    canvasDom: ElementRef;
    context: CanvasRenderingContext2D;
    drawing: boolean = false;

    /* map size */
    canvasWidth: number;
    canvasHeight: number;

    /* block size on map */
    blockWidth: number;
    blockHeight: number;

    /* canvas size in browser */
    clientWidth: number;
    clientHeight: number;

    /* current location on canvas left-top */
    locationX: number;
    locationY: number;
    
    tileData: number[][];
    moveData: number[][];
    objectData: objectType[];
}

