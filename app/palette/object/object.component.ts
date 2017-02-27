import { Component, OnInit } from '@angular/core';

import { PaletteService } from '../../service/palette.service';
import { ObjectService } from '../../service/object.service';

@Component({
    moduleId: module.id,
    selector: 'my-object',
    templateUrl: 'object.component.html',
    styleUrls: ['object.component.css']
})

export class ObjectComponent implements OnInit {

    constructor(
        private paletteService: PaletteService,
        private objectService: ObjectService) { }

    onSelectObjectCategory(selectNum: number): void {
        if (this.paletteService.selectObjectCategory == selectNum)
            this.paletteService.selectObjectCategory = null;
        else
            this.paletteService.selectObjectCategory = selectNum;
    }
    onSelectObject(selectNum: number): void {
        this.paletteService.selectObject = selectNum;
    }

    ngOnInit() {
    }
}