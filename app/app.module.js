"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var app_component_1 = require('./app.component');
/* palette */
var palette_component_1 = require('./palette/palette.component');
var tile_component_1 = require('./palette/tile/tile.component');
var move_component_1 = require('./palette/move/move.component');
var object_component_1 = require('./palette/object/object.component');
/* canvas */
var canvas_component_1 = require('./canvas/canvas.component');
/* slider */
var slider_component_1 = require('./slider/slider.component');
var set_component_1 = require('./slider/set/set.component');
/* service */
var app_service_1 = require('./service/app.service');
var palette_service_1 = require('./service/palette.service');
var tile_service_1 = require('./service/tile.service');
var move_service_1 = require('./service/move.service');
var object_service_1 = require('./service/object.service');
var canvas_service_1 = require('./service/canvas.service');
var canvas_tile_service_1 = require('./service/canvas-tile.service');
var canvas_move_service_1 = require('./service/canvas-move.service');
var canvas_object_service_1 = require('./service/canvas-object.service');
var draw_service_1 = require('./service/draw.service');
var slider_service_1 = require('./service/slider.service');
var set_service_1 = require('./service/set.service');
var set_function_service_1 = require('./service/set-function.service');
/* module */
var ng2_switch_1 = require('ng2-switch');
var select_module_1 = require('./slider/set/options/select.module');
var close_module_1 = require('./module/close.module');
var keyboard_module_1 = require('./controls/keyboard/keyboard.module');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                ng2_switch_1.NgSwitchModule,
                close_module_1.CloseModule,
                select_module_1.SelectModule,
                keyboard_module_1.KeyboardModule,
            ],
            declarations: [
                app_component_1.AppComponent,
                palette_component_1.PaletteComponent,
                tile_component_1.TileComponent,
                move_component_1.MoveComponent,
                object_component_1.ObjectComponent,
                canvas_component_1.CanvasComponent,
                slider_component_1.SliderComponent,
                set_component_1.SetComponent,
            ],
            providers: [
                app_service_1.AppService,
                palette_service_1.PaletteService,
                tile_service_1.TileService,
                move_service_1.MoveService,
                object_service_1.ObjectService,
                canvas_service_1.CanvasService,
                canvas_tile_service_1.CanvasTileService,
                canvas_move_service_1.CanvasMoveService,
                canvas_object_service_1.CanvasObjectService,
                draw_service_1.DrawService,
                slider_service_1.SliderService,
                set_service_1.SetService,
                set_function_service_1.SetFunctionService,
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map