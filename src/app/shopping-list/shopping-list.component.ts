import {Component, OnDestroy, OnInit} from '@angular/core';
import {IngredientModel} from '../SharedModel/Ingredient.model';
import {ShoppingListService} from '../services/shoppingList.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients: IngredientModel[];
  private subscription: Subscription;

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.slService.ingredients;
    this.subscription = this.slService.ingredientsChanged.subscribe(
      (ingredients: IngredientModel[]) =>  {
        this.ingredients = ingredients;
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
