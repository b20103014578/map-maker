import { Injectable } from '@angular/core';

import { SetFunctionService } from '../service/set-function.service';

interface list{
    title: string,
    value: any,
    mode: string,
    type: string[],
    function: any,
    option: string[]
}

@Injectable()
export class SetService{
    constructor(
        private setFunctionService: SetFunctionService) { }

    lists: list[] = [
        {
            title: 'Language',
            value: 0,
            mode: 'select',
            type: ['nonLanguage'],
            function: this.setFunctionService.selectFunction,
            option: ['English','中文']
        },
        {
            title: 'Map Contour',
            value: true,
            mode: 'switch',
            type: [],
            function: null,
            option: []
        },
        {
            title: 'Map Infomation',
            value: 0,
            mode: 'list',
            type: [],
            function: null,
            option: ['Map Width','Map Height']
        },
        {
            title: 'Inport/Export',
            value: 0,
            mode: 'select',
            type: ['nonValue'],
            function: this.setFunctionService.selectFunction,
            option: ['Inport','Export']
        },
    ];
}