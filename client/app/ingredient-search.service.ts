import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { Ingredient } from './ingredient';

@Injectable()
export class IngredientSearchService {

  constructor(private http: Http) {}

  search(term: string): Observable<Ingredient[]> {
    return this.http
      .get(`app/ingredients/?name=${term}`)
      .map((r: Response) => r.json().data as Ingredient[]);
  }
}
