import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Ingredient } from './ingredient';


@Injectable()
export class IngredientService {

  private headers = new Headers({'Content-Type':
  'application/json'});

  update(ingredient: Ingredient): Promise<Ingredient> {
    const url = `${this.ingredientsUrl}/${ingredient.id}`;
    return this.http
      .put(url, JSON.stringify(ingredient), {headers:
      this.headers})
      .toPromise()
      .then(() => ingredient)
      .catch(this.handleError);
  }

  create(name: string): Promise<Ingredient> {
    return this.http
      .post(this.ingredientsUrl, JSON.stringify({name: name}),
    {headers: this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.ingredientsUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private ingredientsUrl = 'app/ingredients'; //URL to web API

  constructor(private http: Http) { }

  getIngredients(): Promise<Ingredient[]> {
    return this.http.get(this.ingredientsUrl)
               .toPromise()
               .then(response => response.json().data as Ingredient[])
               .catch(this.handleError);
  }


  getIngredientsSlowly(): Promise<Ingredient[]> {
    return new Promise<Ingredient[]>(resolve => setTimeout(resolve, 1000))
    .then(() => this.getIngredients());
  }
  getIngredient(id: number): Promise<Ingredient> {
    return this.getIngredients()
      .then(ingredients => ingredients.find(ingredient => ingredient.id === id));
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
 }
}
