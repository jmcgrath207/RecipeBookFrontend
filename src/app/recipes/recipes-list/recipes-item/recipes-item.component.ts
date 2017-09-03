import {Component, Input, OnInit} from '@angular/core';
import {RecipeModel} from '../../recipe.model';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  /* Data is received from the recipe-list.html databind */
  @Input() recipe: RecipeModel;

}



