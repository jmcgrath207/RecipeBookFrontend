import {Component, OnDestroy, OnInit} from '@angular/core';
import {IngredientModel} from '../../SharedModel/Ingredient.model';
import {ShoppingListService} from '../../services/shoppingList.service';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.slService.startedEditing.subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
      }
    );
  }

  onAddItem(form: NgForm) {
    const value = form.value;
    const newingredient = new IngredientModel(value.name, value.amount);
    this.slService.addIngredient(newingredient);

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
