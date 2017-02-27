import { Component, OnInit } from '@angular/core';

import { PaletteService }   from '../../service/palette.service';
import { TileService }      from '../../service/tile.service';

@Component({
    moduleId: module.id,
    selector: 'my-tile',
    templateUrl: 'tile.component.html',
    styleUrls: [ 'tile.component.css' ]
})

export class TileComponent implements OnInit {
    
    constructor(
        private paletteService: PaletteService,
        private tileService: TileService) { }
    
    onSelectTileCategory(selectNum: number): void{
        if(this.paletteService.selectTitleCategory == selectNum)
            this.paletteService.selectTitleCategory = null;
        else
            this.paletteService.selectTitleCategory = selectNum;
    }
    onSelectTile(selectNum: number): void{
        this.paletteService.selectTitle = selectNum;
    }

    ngOnInit() {
    }
}