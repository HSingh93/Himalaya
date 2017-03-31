
import { Component } from '@angular/core';

@Component({
    selector: 'my-nav-bar',
    template: `
        <ul class="nav nav-tabs">
            <li role="presentation" [ngClass]="isActive[1]"><a (click)="clicked(1)">Home</a></li>
            <li role="presentation" [ngClass]="isActive[2]"><a (click)="clicked(2)">Profile</a></li>
            <li role="presentation" [ngClass]="isActive[3]"><a (click)="clicked(3)">Messages</a></li>
        </ul>
        <div style="margin: 15px;">
            <h3> {{ currentText }} </h3>
        </div>
    `
})
export class AppComponent {
  currentText: string = "Hello World 1"!;

  isActive = {
    1: "active",
    2: "",
    3: ""
  };

  clicked = function (n) {
    this.isActive[1] = '';
    this.isActive[2] = '';
    this.isActive[3] = '';

    if(n == 1){
        this.currentText = "Hello World 1";
        this.isActive[1] = 'active';
    }
    if(n == 2){
        this.currentText = "Hello World 2";
        this.isActive[2] = 'active';
    }
    if(n == 3){
        this.currentText = "Hello World 3";
        this.isActive[3] = 'active';
    }

  }


}