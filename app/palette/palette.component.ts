import { Component, OnInit } from '@angular/core';

import { PaletteService }   from '../service/palette.service';

const CategoryList: string[] = [
    'Tile',
    'Move',
    'Object'
];

const TitleList: string[] = [
    'Tile List',
    'Move Mode',
    'Object List'
];

@Component({
    moduleId: module.id,
    selector: 'my-palette',
    templateUrl: 'palette.component.html',
    styleUrls: [ 'palette.component.css' ]
})

export class PaletteComponent implements OnInit {
    categoryList: string[];
    title: string;
    
    constructor(
        private paletteService: PaletteService) { }
    
    onSelectCategory(selectNum: number): void {
        this.paletteService.selectCategory = CategoryList[selectNum];
        this.title = TitleList[selectNum];
    }

    ngOnInit() {
        this.categoryList = CategoryList;
        this.onSelectCategory(0);
    }
}