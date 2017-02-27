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
var slider_service_1 = require('../service/slider.service');
var CategoryList = [
    'SET',
    'GROUP',
    'OBJECT'
];
var SliderComponent = (function () {
    function SliderComponent(sliderService) {
        this.sliderService = sliderService;
    }
    SliderComponent.prototype.onSelect = function (selectNum) {
        this.sliderService.selectCategory = selectNum;
        this.category = CategoryList[selectNum];
        this.title = CategoryList[selectNum];
        this.sliderService.right = 0;
    };
    SliderComponent.prototype.onClose = function () {
        this.category = '';
        this.sliderService.right = -270;
    };
    SliderComponent.prototype.ngOnInit = function () {
        this.categoryList = CategoryList;
    };
    SliderComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-slider',
            templateUrl: 'slider.component.html',
            styleUrls: ['slider.component.css']
        }), 
        __metadata('design:paramtypes', [slider_service_1.SliderService])
    ], SliderComponent);
    return SliderComponent;
}());
exports.SliderComponent = SliderComponent;
//# sourceMappingURL=slider.component.js.map