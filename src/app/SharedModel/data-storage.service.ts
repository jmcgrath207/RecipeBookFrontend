
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {RecipeService} from '../services/recipe.service';
import {RecipeModel} from '../recipes/recipe.model';

@Injectable()
export class DataStorageService {

  constructor(private http: Http,
              private recipeService: RecipeService) {}

    storeRecipes() {
      return this.http.put('https://angular4recipe.firebaseio.com/recipes.json',
        this.recipeService.recipes);
    }

    getRecipes() {
      this.http.get('https://angular4recipe.firebaseio.com/recipes.json').subscribe(
        (response: Response) => {
        const recipes: RecipeModel[] = response.json();
        this.recipeService.setRecipes(recipes);
        }
      );
    }

}
