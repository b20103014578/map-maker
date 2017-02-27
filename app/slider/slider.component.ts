import { Component, OnInit } from '@angular/core';

import { SliderService } from '../service/slider.service';

const CategoryList: string[] = [
    'SET',
    'GROUP',
    'OBJECT'
]

@Component({
    moduleId: module.id,
    selector: 'my-slider',
    templateUrl: 'slider.component.html',
    styleUrls: [ 'slider.component.css' ]
})

export class SliderComponent implements OnInit{
    categoryList: string[];
    category: string;
    title: string;
    
    constructor(
        private sliderService: SliderService) { }
    
    onSelect(selectNum: number): void {
        this.sliderService.selectCategory = selectNum;
        this.category = CategoryList[selectNum];
        this.title = CategoryList[selectNum];

        this.sliderService.right = 0;
    }

    onClose(): void{
        this.category = '';
        this.sliderService.right = -270;
    }
    
    ngOnInit(){
        this.categoryList = CategoryList;
    }
}