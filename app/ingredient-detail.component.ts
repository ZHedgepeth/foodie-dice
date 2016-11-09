import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { IngredientService } from './ingredient.service';
import { Ingredient } from './ingredient';

@Component({
  moduleId: module.id,
  selector: 'my-ingredient-detail',
  templateUrl: 'ingredient-detail.component.html'

})

export class IngredientDetailComponent implements OnInit{

  @Input() ingredient: Ingredient;

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

  goBack(): void {
    this.location.back();
  }
}
