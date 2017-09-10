import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RecipeModel} from '../recipe.model';
import {RecipeService} from '../../services/recipe.service';


@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<RecipeModel>();

  recipes: RecipeModel[];

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.recipes;
  }

  onRecipeSelected(recipe: RecipeModel) {
    this.recipeWasSelected.emit(recipe);
  }

}
