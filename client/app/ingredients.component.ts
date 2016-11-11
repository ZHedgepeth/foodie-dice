import { Component, OnInit } from '@angular/core';
import { Router }  from '@angular/router';

import { Ingredient } from './ingredient';
import { IngredientService } from './ingredient.service';

@Component({
  moduleId: module.id,
  selector: 'my-ingredients',
  templateUrl: 'ingredients.component.html',
  styleUrls: [ 'ingredients.component.css' ]
})

export class IngredientsComponent implements OnInit {
  ingredients: Ingredient[];
  selectedIngredient: Ingredient;

  constructor(
    private ingredientService: IngredientService,
    private router: Router) {}

  getIngredients(): void {
    this.ingredientService
      .getIngredients()
      .then(ingredients => this.ingredients = ingredients);
  }

  ngOnInit(): void {
    this.getIngredients();
  }

  onSelect(ingredient: Ingredient): void {
    this.selectedIngredient = ingredient;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail',
  this.selectedIngredient.id]);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.ingredientService.create(name)
      .then(ingredient => {
        this.ingredients.push(ingredient);
        this.selectedIngredient = null;
      })
  }

  delete(ingredient: Ingredient): void {
    this.ingredientService
      .delete(ingredient.id)
      .then(() => {
        this.ingredients = this.ingredients.filter(i => i !== ingredient);
        if(this.selectedIngredient === ingredient) { this.selectedIngredient = null; }
      });
  }
}
