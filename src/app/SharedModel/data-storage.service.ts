
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {RecipeService} from '../services/recipe.service';

@Injectable()
export class DataStorageService {

  constructor(private http: Http,
              private recipeService: RecipeService) {}

    storeRecipes() {
      return this.http.put('https://angular4recipe.firebaseio.com/recipes.json',
        this.recipeService.recipes);
    }

}
