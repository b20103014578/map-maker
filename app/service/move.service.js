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
var MoveService = (function () {
    function MoveService() {
        this.lists = [
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
        ];
    }
    MoveService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], MoveService);
    return MoveService;
}());
exports.MoveService = MoveService;
//# sourceMappingURL=move.service.js.map