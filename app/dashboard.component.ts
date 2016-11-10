import { Component, OnInit  } from '@angular/core';

import { Ingredient } from './ingredient';
import { IngredientService } from './ingredient.service';

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: [ 'dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  ingredients: Ingredient[] = [];

  constructor(private ingredientService: IngredientService) { }

  ngOnInit(): void {
    this.ingredientService.getIngredients()
    .then(ingredients => this.ingredients = ingredients.slice(1, 5));
  }
}
