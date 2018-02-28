import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('First Chicken', 'Delicious Chicken', 'https://static.pexels.com/photos/106343/pexels-photo-106343.jpeg'),
    new Recipe("Grill", "Healthy grill", "https://static.pexels.com/photos/106343/pexels-photo-106343.jpeg")
  ];
  constructor() { }

  ngOnInit() {
  }

}
