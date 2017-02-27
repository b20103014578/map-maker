import { Injectable } from '@angular/core'

import { CanvasService } from '../service/canvas.service';
import { PaletteService } from '../service/palette.service';

@Injectable()
export class CanvasTileService{
    constructor(
        private canvasService: CanvasService,
        private paletteService: PaletteService) { }

    writeTileData(canvasX: number, canvasY: number, rightClick: boolean): void{
            /* right click to clear tile */
        if(rightClick == true)
            this.canvasService.tileData[canvasX][canvasY] = 0;
            /* left click to draw tile */
        else if(this.paletteService.selectTitle != null)
            this.canvasService.tileData[canvasX][canvasY] = this.paletteService.selectTitle + 1;
    }
}