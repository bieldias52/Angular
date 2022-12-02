import { Component, OnInit } from '@angular/core';
import { RecipeService } from './recipe.service';
import {Recipe} from "./recipes.module";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {

  recipeSelected: Recipe

  constructor(private recipeService: RecipeService) { }

  show:string = ''

  ngOnInit(): void {
    this.recipeService.recipeSelectered.subscribe(
      (recipe: Recipe) => {
        this.recipeSelected = recipe
      }
    )
  }

}
