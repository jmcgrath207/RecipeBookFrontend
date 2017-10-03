
import {Injectable} from '@angular/core';
import { Response} from '@angular/http';
import {RecipeService} from '../services/recipe.service';
import {RecipeModel} from '../recipes/recipe.model';
import 'rxjs';
import {AuthService} from '../auth/auth.service';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class DataStorageService {

  constructor(private httpClient: HttpClient,
              private recipeService: RecipeService,
              private authService: AuthService ) {}

    storeRecipes() {
      const token = this.authService.getToken();
      return this.httpClient.put('https://angular4recipe.firebaseio.com/recipes.json?auth=' + token,
        this.recipeService.recipes);
    }

    getRecipes() {
    const token = this.authService.getToken();

      this.httpClient.get<RecipeModel[]>('https://angular4recipe.firebaseio.com/recipes.json?auth=' + token)
        .map(
          (recipes) => {
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
