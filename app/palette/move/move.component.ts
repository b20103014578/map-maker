import { Component, OnInit } from '@angular/core';

import { PaletteService }   from '../../service/palette.service';
import { MoveService }   from '../../service/move.service';

@Component({
    moduleId: module.id,
    selector: 'my-move',
    templateUrl: 'move.component.html',
    styleUrls: [ 'move.component.css' ]
})

export class MoveComponent implements OnInit {
    
    constructor(
        private paletteService: PaletteService,
        private moveService: MoveService) { }
    
    onSelectMove(selectNum: number): void{
        this.paletteService.selectMove = selectNum;
    }

    ngOnInit() {
    }
}