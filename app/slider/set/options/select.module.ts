import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule  } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'my-select',
    template: '<div>test</div>',
    styles: ['']
})

export class SelectComponent{

}

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [SelectComponent],
  exports: [SelectComponent]
})

export class SelectModule {

}
