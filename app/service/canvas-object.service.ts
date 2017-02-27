import { Injectable } from '@angular/core'

import { CanvasService } from '../service/canvas.service';
import { PaletteService } from '../service/palette.service';

@Injectable()
export class CanvasObjectService {
    constructor(
        private canvasService: CanvasService,
        private paletteService: PaletteService) { }

    createObjectData(canvasX: number, canvasY: number, index: number) {
        this.canvasService.objectData.push({ x: canvasX, y: canvasY, data: index });
    }

    writeObjectData(canvasX: number, canvasY: number, rightClick: boolean): void {
        if (this.paletteService.selectObject != null) {           //create new object
            console.log(this.paletteService.selectObject);
            this.createObjectData(canvasX, canvasY, this.paletteService.selectObject);
            this.paletteService.selectObject = null;
        }
        else {       //move object
        }
    }
}