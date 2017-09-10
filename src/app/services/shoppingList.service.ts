import { Injectable } from '@angular/core';
import {IngredientModel} from '../SharedModel/Ingredient.model';

@Injectable()
export class ShoppingListService {

  constructor() { }

  private _ingredients: IngredientModel[] = [
    new IngredientModel('Apples', 5),
    new IngredientModel('Pinapple', 3),
    new IngredientModel('Tomatoes', 4)

  ];


  get ingredients(): IngredientModel[] {
    return this._ingredients.slice();
  }

  addIngredient(ingredient: IngredientModel) {
    this.ingredients.push(ingredient);
  }
}
