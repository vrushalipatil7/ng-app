import { Component, OnInit } from '@angular/core';
import { recipe } from '../recipe';
import { RecipeItemComponent } from './recipe-item.component';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class recipeListComponent implements OnInit {
  recipes: recipe[] = [];
  recipe = new recipe('dummy', 'dummy','http://crashtestdummy.com.au/wp-content/uploads/2010/12/crash-test-dummy-awards.jpg')
  constructor() { }

  ngOnInit() {
  }

}
