import { Component, HostListener, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { KeyboardService }   from './keyboard.service';

@Component({
    selector: 'my-keyboard',
    template: '',
    styles: ['']
})
export class KeyboardComponent{

    constructor(
        private keyboardService: KeyboardService) { }

    @HostListener('window:keydown', ['$event'])
    onKeyEvent(event: any){
        this.keyboardService.KEYS.SHIFT = !!event.shiftKey;
        this.keyboardService.KEYS.CTRL = !!event.ctrlKey;
        this.keyboardService.KEYS.ALT = !!event.altKey;
        
        console.log(this.keyboardService.KEYS.ALT);
    }
}

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [KeyboardComponent],
  providers:    [KeyboardService],
  exports: [KeyboardComponent]
})
export class KeyboardModule {
}