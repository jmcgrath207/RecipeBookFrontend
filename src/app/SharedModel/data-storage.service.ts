
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {RecipeService} from '../services/recipe.service';
import {RecipeModel} from '../recipes/recipe.model';
import 'rxjs';

@Injectable()
export class DataStorageService {

  constructor(private http: Http,
              private recipeService: RecipeService) {}

    storeRecipes() {
      return this.http.put('https://angular4recipe.firebaseio.com/recipes.json',
        this.recipeService.recipes);
    }

    getRecipes() {
      this.http.get('https://angular4recipe.firebaseio.com/recipes.json')
        .map(
          (response: Response) => {
            const recipes: RecipeModel[] = response.json();
            for ( let i = 0; i < recipes.length; i++) {
              if (!recipes[i]['ingredients']) {
                console.log(recipes[i]);
                recipes[i]['ingredients'] = [];
              }
            }
            return recipes;
          }
        )
        .subscribe(
        (recipes: RecipeModel[]) => {
        this.recipeService.setRecipes(recipes);
        }
      );
    }

}
