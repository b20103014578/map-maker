import { Component, NgModule, OnInit } from '@angular/core';

import { SetService } from '../../service/set.service';

@Component({
    moduleId: module.id,
    selector: 'my-set',
    templateUrl: 'set.component.html',
    styleUrls: [ 'set.component.css' ]
})

export class SetComponent implements OnInit{
    setList: any[];
    value: number = 0;

    constructor(
        private setService: SetService) { }
        
    onSelect(list: any): void {
        if(list.function)
            list.function(list);
    }

    ngOnInit(){
        this.setList = this.setService.lists;
    }
}