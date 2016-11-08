import { Injectable } from '@angular/core';

import { Ingredient } from './ingredient';
import { INGREDIENTS } from './mock-ingredients';

@Injectable()
export class IngredientService {
  getIngredients(): Promise<Ingredient[]> {
    return Promise.resolve(INGREDIENTS);
  }
  getIngredientsSlowly(): Promise<Ingredient[]> {
    return new Promise<Ingredient[]>(resolve => setTimeout(resolve, 1000))
    .then(() => this.getIngredients());
  }
}
