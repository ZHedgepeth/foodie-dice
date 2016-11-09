import { NgModule }                   from '@angular/core';
import { RouterModule, Routes }       from '@angular/router';

import { DashboardComponent }         from './dashboard.component';
import { IngredientsComponent }       from './ingredients.component';
import { IngredientDetailComponent }  from './ingredient-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: IngredientDetailComponent },
  { path: 'ingredients', component: IngredientsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
