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
var set_function_service_1 = require('../service/set-function.service');
var SetService = (function () {
    function SetService(setFunctionService) {
        this.setFunctionService = setFunctionService;
        this.lists = [
            {
                title: 'Language',
                value: 0,
                mode: 'select',
                type: ['nonLanguage'],
                function: this.setFunctionService.selectFunction,
                option: ['English', '中文']
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
                option: ['Map Width', 'Map Height']
            },
            {
                title: 'Inport/Export',
                value: 0,
                mode: 'select',
                type: ['nonValue'],
                function: this.setFunctionService.selectFunction,
                option: ['Inport', 'Export']
            },
        ];
    }
    SetService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [set_function_service_1.SetFunctionService])
    ], SetService);
    return SetService;
}());
exports.SetService = SetService;
//# sourceMappingURL=set.service.js.map