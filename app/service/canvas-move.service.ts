import { Injectable } from '@angular/core'

import { CanvasService } from '../service/canvas.service';
import { PaletteService } from '../service/palette.service';

@Injectable()
export class CanvasMoveService{
    constructor(
        private canvasService: CanvasService,
        private paletteService: PaletteService) { }

    writeMoveData(canvasX: number, canvasY: number): void{
        if(this.paletteService.selectMove != null)
            this.canvasService.moveData[canvasX][canvasY] = this.paletteService.selectMove + 1;
    }
}