
'use strict';
// Angular modules
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';

// Application modules
import {AppComponent} from './app.component';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
    ],
    declarations: [
        AppComponent,
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }