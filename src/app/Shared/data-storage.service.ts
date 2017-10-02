
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {RecipeService} from '../services/recipe.service';
import {RecipeModel} from '../recipes/recipe.model';
import 'rxjs';
import {AuthService} from '../auth/auth.service';

@Injectable()
export class DataStorageService {

  constructor(private http: Http,
              private recipeService: RecipeService,
              private authService: AuthService ) {}

    storeRecipes() {
      const token = this.authService.getToken();
      return this.http.put('https://angular4recipe.firebaseio.com/recipes.json?auth=' + token,
        this.recipeService.recipes);
    }

    getRecipes() {
    const token = this.authService.getToken();

      this.http.get('https://angular4recipe.firebaseio.com/recipes.json?auth=' + token)
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
