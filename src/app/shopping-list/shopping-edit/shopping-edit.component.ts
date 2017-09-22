import {Component, OnInit} from '@angular/core';
import {IngredientModel} from '../../SharedModel/Ingredient.model';
import {ShoppingListService} from '../../services/shoppingList.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {


  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem(form: NgForm) {
    const value = form.value;
    const newingredient = new IngredientModel(value.name, value.amount);
    this.slService.addIngredient(newingredient);

  }

}
