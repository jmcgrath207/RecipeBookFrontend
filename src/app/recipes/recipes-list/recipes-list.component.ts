import { Component, OnInit } from '@angular/core';
import {RecipeModel} from '../recipe.model';


@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  recipes: RecipeModel[] = [
    new RecipeModel('A Test Recipe', 'THis is simply a test',
      'https://farm9.staticflickr.com/8575/15775087589_a725c0b077_z.jpg'),
    new RecipeModel('A Test Recipe', 'THis is simply a test',
      'https://farm9.staticflickr.com/8575/15775087589_a725c0b077_z.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
