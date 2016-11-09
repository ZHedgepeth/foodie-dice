import { NgModule }                   from '@angular/core';
import { BrowserModule }              from '@angular/platform-browser';
import { FormsModule }                from '@angular/forms';
import { HttpModule }                 from '@angular/http';

import { AppRoutingModule }           from './app-routing.module';

//This is something that will trick the HTTP client ontp fetching and asving data from a mock service, make adjustments here when we work with an actual database

import { InMemoryWebApiModule }       from 'angular-in-memory-web-api';
import { InMemoryDataService }        from './in-memory-data.service';

//end-mock importss

import { AppComponent }               from './app.component';
import { DashboardComponent }         from './dashboard.component';
import { IngredientsComponent }       from './ingredients.component';
import { IngredientDetailComponent }  from './ingredient-detail.component';
import { IngredientService }          from './ingredient.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    IngredientDetailComponent,
    IngredientsComponent
  ],
  providers: [
    IngredientService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
