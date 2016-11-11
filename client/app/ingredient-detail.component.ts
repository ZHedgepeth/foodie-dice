import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Ingredient } from './ingredient';
import { IngredientService } from './ingredient.service';

@Component({
  moduleId: module.id,
  selector: 'my-ingredient-detail',
  templateUrl: 'ingredient-detail.component.html',
  styleUrls: [ 'ingredient-detail.component.css' ]
})

export class IngredientDetailComponent implements OnInit{
  ingredient: Ingredient;

  constructor(
    private ingredientService: IngredientService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.ingredientService.getIngredient(id)
        .then(ingredient => this.ingredient = ingredient);
    });
  }

  save(): void {
    this.ingredientService.update(this.ingredient)
    .then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
