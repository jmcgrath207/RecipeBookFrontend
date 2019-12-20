import {Component, OnDestroy, OnInit} from '@angular/core';
import {IngredientModel} from '../Shared/Ingredient.model';
import {ShoppingListService} from '../services/shoppingList.service';
import {Subscription} from 'rxjs';

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

  onEditItem(index: number) {
    this.slService.startedEditing.next(index);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
