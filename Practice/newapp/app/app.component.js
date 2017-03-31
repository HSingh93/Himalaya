"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.currentText = "Hello World 1";
        this.isActive = {
            1: "active",
            2: "",
            3: ""
        };
        this.clicked = function (n) {
            this.isActive[1] = '';
            this.isActive[2] = '';
            this.isActive[3] = '';
            if (n == 1) {
                this.currentText = "Hello World 1";
                this.isActive[1] = 'active';
            }
            if (n == 2) {
                this.currentText = "Hello World 2";
                this.isActive[2] = 'active';
            }
            if (n == 3) {
                this.currentText = "Hello World 3";
                this.isActive[3] = 'active';
            }
        };
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-nav-bar',
        template: "\n        <ul class=\"nav nav-tabs\">\n            <li role=\"presentation\" [ngClass]=\"isActive[1]\"><a (click)=\"clicked(1)\">Home</a></li>\n            <li role=\"presentation\" [ngClass]=\"isActive[2]\"><a (click)=\"clicked(2)\">Profile</a></li>\n            <li role=\"presentation\" [ngClass]=\"isActive[3]\"><a (click)=\"clicked(3)\">Messages</a></li>\n        </ul>\n        <div style=\"margin: 15px;\">\n            <h3> {{ currentText }} </h3>\n        </div>\n    "
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map