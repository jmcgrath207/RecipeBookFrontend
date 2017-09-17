import {EventEmitter, Injectable} from '@angular/core';
import {RecipeModel} from '../recipes/recipe.model';
import {IngredientModel} from '../SharedModel/Ingredient.model';
import {ShoppingListService} from './shoppingList.service';

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<RecipeModel>();


  private _recipes: RecipeModel[] = [
    new RecipeModel('A Test Recipe', 'THis is simply a test',
      'https://farm9.staticflickr.com/8575/15775087589_a725c0b077_z.jpg',
      [
        new IngredientModel('meat', 1),
        new IngredientModel('french fries', 20)

      ]),
    new RecipeModel('A Test Recipe', 'THis is simply a test 2',
      'https://static.pexels.com/photos/20787/pexels-photo.jpg',
      [
        new IngredientModel('Buns', 2),
        new IngredientModel('meat', 1)
      ])
  ];

  constructor(private slService: ShoppingListService) { }

  get recipes(): RecipeModel[] {
    return this._recipes.slice();
  }

  getRecipe(id: number) {
    return this._recipes[id];
  }

  addIngredientsToShoppingList(ingredients: IngredientModel[]) {
    this.slService.addIngredients(ingredients);

  }

}
