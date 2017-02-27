import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }   from './app.component';

  /* palette */
import { PaletteComponent } from './palette/palette.component';
import { TileComponent }    from './palette/tile/tile.component';
import { MoveComponent }    from './palette/move/move.component';
import { ObjectComponent }  from './palette/object/object.component';

  /* canvas */
import { CanvasComponent }  from './canvas/canvas.component';

  /* slider */
import { SliderComponent }  from './slider/slider.component';
import { SetComponent }     from './slider/set/set.component';

  /* service */
import { AppService }         from './service/app.service';
import { PaletteService }     from './service/palette.service';
import { TileService }        from './service/tile.service';
import { MoveService }        from './service/move.service';
import { ObjectService }      from './service/object.service';
import { CanvasService }      from './service/canvas.service';
import { CanvasTileService }  from './service/canvas-tile.service';
import { CanvasMoveService }  from './service/canvas-move.service';
import { CanvasObjectService } from './service/canvas-object.service';
import { DrawService }        from './service/draw.service';
import { SliderService }      from './service/slider.service';
import { SetService }         from './service/set.service';
import { SetFunctionService } from './service/set-function.service';

  /* module */
import { NgSwitchModule }   from 'ng2-switch';
import { SelectModule }     from './slider/set/options/select.module';
import { CloseModule }  from './module/close.module';
import { KeyboardModule } from './controls/keyboard/keyboard.module';

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    NgSwitchModule,
    CloseModule,
    SelectModule,
    KeyboardModule,
    ],
  declarations: [ 
    AppComponent,
    PaletteComponent,
      TileComponent,
      MoveComponent,
      ObjectComponent,
    CanvasComponent,
    SliderComponent,
      SetComponent,
  ],
  providers:    [
    AppService, 
    PaletteService,
      TileService,
      MoveService,
      ObjectService,
    CanvasService,
      CanvasTileService,
      CanvasMoveService,
      CanvasObjectService,
      DrawService,
    SliderService,
      SetService,
      SetFunctionService,
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
