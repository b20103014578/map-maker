import { Injectable } from '@angular/core';

interface moveElement{
    title: string;
    imgPath?: string;
    backColor?: string;
    rgba: string;
}

@Injectable()
export class MoveService{
    lists: moveElement[] = [
        {
            title: 'Movable',
            backColor: '368e18',
            rgba: 'rgba(54, 143, 24, .5)'
        },
        {
            title: 'Unmovable',
            backColor: 'b32929',
            rgba: 'rgba(179, 41, 41, .5)'
        }
    ]
}