import { NgModule }                   from '@angular/core';
import { BrowserModule }              from '@angular/platform-browser';
import { FormsModule }                from '@angular/forms';
import { RouterModule }               from '@angular/router';

import { AppComponent }               from './app.component';
import { IngredientDetailComponent }  from './ingredient-detail.component';
import { IngredientsComponent }       from './ingredients.component';
import { IngredientService }          from './ingredient.service';
import { DashboardComponent }         from './dashboard.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'detail/:id',
        component: IngredientDetailComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'ingredients',
        component: IngredientsComponent
      },
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      }
    ])
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
