
import {Injectable} from '@angular/core';
import {RecipeService} from '../services/recipe.service';
import {RecipeModel} from '../recipes/recipe.model';
import 'rxjs';
import {AuthService} from '../auth/auth.service';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable()
export class DataStorageService {

  constructor(private httpClient: HttpClient,
              private recipeService: RecipeService,
              private authService: AuthService ) {}

    storeRecipes() {
      const token = this.authService.getToken();
 /*     const headers = new HttpHeaders().set('Authorization', "asdfasdfasdf").append("asdfsa","asdfsafd");*/
      return this.httpClient.put('https://angular4recipe.firebaseio.com/recipes.json',
        this.recipeService.recipes, {
        observe: 'body',
          params: new HttpParams().set('auth', token)
/*          headers: headers*/
        });
    }

    getRecipes() {
    const token = this.authService.getToken();

      this.httpClient.get<RecipeModel[]>('https://angular4recipe.firebaseio.com/recipes.json?auth=' + token,
        {
        observe: 'body',
        responseType: 'json'
      })
        .map(
          (recipes) => {
            console.log(recipes);
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
