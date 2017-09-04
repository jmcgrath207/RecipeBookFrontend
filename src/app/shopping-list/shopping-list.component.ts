import { Component, OnInit } from '@angular/core';
import {IngredientModel} from '../SharedModel/Ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: IngredientModel[] = [
    new IngredientModel('Apples', 5),
    new IngredientModel('Pinapple', 3),
    new IngredientModel('Tomatoes', 4)

  ];

  constructor() { }

  ngOnInit() {
  }

  onIngredientAdded(ingredient: IngredientModel) {
    this.ingredients.push(ingredient);
  }

}
