import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found.component';

import { HomeComponent } from './components/home/home.component';
import { CalculationComponent } from './components/calculation/calculation.component';

import { PropertyAnalysisService } from './services/property-analysis.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CalculationComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'calculate',
        component: CalculationComponent
      },
      {
        path: '**',
        component: NotFoundComponent
      }
    ])
  ],
  providers: [PropertyAnalysisService],
  bootstrap: [AppComponent]
})
export class AppModule { }
