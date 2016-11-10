import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

import { IngredientSearchService} from './ingredient-search.service';
import { Ingredient } from './ingredient';

@Component({
  moduleId: module.id,
  selector: 'ingredient-search',
  templateUrl: 'ingredient-search.component.html',
  styleUrls: [ 'ingredient-search.component.css' ],
  providers: [IngredientSearchService]
})
export class IngredientSearchComponent implements OnInit {
  ingredients: Observable<Ingredient[]>;
  private searchTerms = new Subject<string>();

  //Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  constructor(
    private ingredientSearchService: IngredientSearchService,
    private router: Router) {}

  //Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ingredients: Observable<Ingredient[]>;

  ngOnInit(): void {
    this.ingredients = this.searchTerms
      .debounceTime(300) //wait for 300ms pause in events
      .distinctUntilChanged() //ignore if next search is same as previous
      .switchMap(term => term //switch to new observable each time)
        //return http search observable
        ? this.ingredientSearchService.search(term)
        //or the observable of empty ingredients if no search term
        : Observable.of<Ingredient[]>([]))
      .catch(error => {
        //TODO: REAL error handling
        console.log(error);
        return Observable.of<Ingredient[]>([])
      });
  }

  gotoDetail(ingredient: Ingredient): void {
    let link = ['/detail', ingredient.id];
    this.router.navigate(link);
  }
}
