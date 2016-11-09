import { Component, OnInit } from '@angular/core';
import { Ingredient } from './ingredient';
import { IngredientService } from './ingredient.service';

@Component({
  selector: 'my-ingredients',
  template: `

  <h2>My Ingredient List</h2>
  <ul class="ingredients">
    <li *ngFor="let ingredient of ingredients"
      [class.selected]="ingredient === selectedIngredient"
      (click)="onSelect(ingredient)">
      <span class="badge">{{ingredient.id}}</span>
      {{ingredient.name}}
    </li>
  </ul>
  <my-ingredient-detail [ingredient]="selectedIngredient"></my-ingredient-detail>
`,
styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .ingredients {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .ingredients li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .ingredients li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .ingredients li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .ingredients .text {
    position: relative;
    top: -3px;
  }
  .ingredients .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
  `],

  // providers: [IngredientService]
})

export class IngredientsComponent implements OnInit {
  ingredients: Ingredient[];
  selectedIngredient: Ingredient;
  
  title = 'Foodie Dice';
  constructor(private ingredientService: IngredientService) {}

  getIngredients(): void {
    this.ingredientService.getIngredients().then(ingredients => this.ingredients = ingredients);
  }

  ngOnInit(): void {
    this.getIngredients();
  }

  onSelect(ingredient: Ingredient): void {
    this.selectedIngredient = ingredient;
  }
}
