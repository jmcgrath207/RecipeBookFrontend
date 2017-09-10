import {EventEmitter, Injectable} from '@angular/core';
import {RecipeModel} from '../recipes/recipe.model';

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<RecipeModel>();


  private _recipes: RecipeModel[] = [
    new RecipeModel('A Test Recipe', 'THis is simply a test',
      'https://farm9.staticflickr.com/8575/15775087589_a725c0b077_z.jpg'),
    new RecipeModel('A Test Recipe', 'THis is simply a test 2',
      'https://static.pexels.com/photos/20787/pexels-photo.jpg')
  ];

  constructor() { }

  get recipes(): RecipeModel[] {
    return this._recipes.slice();
  }

}
