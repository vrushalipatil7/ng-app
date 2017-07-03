import { Component, OnInit, Input } from '@angular/core';
import { recipe } from '../recipe';
import { RecipeListComponent } from './recipe-list.component';

@Component({
  selector: 'rb-recipe-item',
  templateUrl: './recipe-item.component.html'
})
export class recipeItemComponent implements OnInit {
@Input() recipe: recipe;
recipeId: number;
  constructor() { 
  }

  ngOnInit() {
  }

}
