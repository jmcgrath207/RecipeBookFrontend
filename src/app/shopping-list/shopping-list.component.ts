import { Component, OnInit } from '@angular/core';
import {IngredientModel} from '../SharedModel/Ingredient.model';
import {ShoppingListService} from '../services/shoppingList.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: IngredientModel[];

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.slService.ingredients;
    this.slService.ingredientsChanged.subscribe(
      (ingredients: IngredientModel[]) =>  {
        this.ingredients = ingredients;
      }
    );
  }

}
