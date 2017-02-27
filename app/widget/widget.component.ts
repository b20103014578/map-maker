import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-widget',
    templateUrl: 'widget.component.html',
    styleUrls: [ 'widget.component.css' ]
})

export class SliderComponent implements OnInit{
    categoryList: string[];
    category: string;
    title: string;
    
    
    ngOnInit(){
    }
}