import { NgModule }                   from '@angular/core';
import { BrowserModule }              from '@angular/platform-browser';
import { FormsModule }                from '@angular/forms';
import { AppComponent }               from './app.component';
import { IngredientDetailComponent }  from './ingredient-detail.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
    ],
  declarations: [
     AppComponent,
     IngredientDetailComponent
    ],
  bootstrap: [
     AppComponent
    ]
})
export class AppModule { }
