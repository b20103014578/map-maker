import { Component, NgModule, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule  } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'my-close',
    template: '<img id="slider-close" src="./app/images/widget/close.png">',
    styles: [`
        #slider-close{
            position: absolute;
            left: 10px;
            top: 5px;
            width: 15px;
            height: 15px;
            cursor: pointer;
        }
    `]
})

export class CloseComponent{
}

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [CloseComponent],
  exports: [CloseComponent]
})
export class CloseModule {
}
