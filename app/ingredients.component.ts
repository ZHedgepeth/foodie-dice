import { Component, OnInit } from '@angular/core';
import { Ingredient } from './ingredient';
import { IngredientService } from './ingredient.service';
import { Router }  from '@angular/router';

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
    private router: Router,
    private ingredientService: IngredientService) {}

  getIngredients(): void {
    this.ingredientService.getIngredients().then(ingredients => this.ingredients = ingredients);
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
        this.ingredient = this.ingredients.filter(i => i !== ingredient);
        if(this.selectedIngredient === ingredient) { this.selectedIngredient = null; }
      });
  }
}
