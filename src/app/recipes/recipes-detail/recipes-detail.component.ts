import {Component, Input, OnInit} from '@angular/core';
import {RecipeModel} from '../recipe.model';
import {RecipeService} from '../../services/recipe.service';
import {IngredientModel} from "../../SharedModel/Ingredient.model";

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {
  @Input() recipe: RecipeModel;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);

  }

}
