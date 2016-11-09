import { NgModule }                   from '@angular/core';
import { BrowserModule }              from '@angular/platform-browser';
import { FormsModule }                from '@angular/forms';

import { AppComponent }               from './app.component';
import { IngredientDetailComponent }  from './ingredient-detail.component';
import { IngredientsComponent }       from './ingredients.component';
import { IngredientService }          from './ingredient.service';
import { DashboardComponent }         from './dashboard.component';
import { AppRoutingModule }           from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    IngredientDetailComponent,
    IngredientsComponent,
    DashboardComponent
  ],
  providers: [
    IngredientService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
