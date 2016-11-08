import { Component, Input } from '@angular/core';
import { Ingredient } from './ingredient';

@Component({
  selector: 'my-ingredient-detail',
  template: `
  <div *ngIf="ingredient">
    <h2>{{ingredient.name}} details!</h2>
    <div><label>id: </label>{{ingredient.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="ingredient.name" placeholder="name"/>
    </div>
  </div>
`

})

export class IngredientDetailComponent {

  @Input() ingredient: Ingredient;

}
