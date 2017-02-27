import {Component, OnInit, HostListener, ViewEncapsulation} from '@angular/core';

import { SliderService } from './service/slider.service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: [ 'app.component.css' ],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {
    
    constructor(
        private sliderService: SliderService) { }

    ngOnInit() {
        this.sliderService.right = -270;
    }
    
    // @HostListener('window:keydown keyup', ['$event'])
    // onkeydown(event : any){
    //     console.log("keydown", event);
    // }
}
