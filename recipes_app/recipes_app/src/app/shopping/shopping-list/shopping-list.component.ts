import { Component, OnInit } from '@angular/core';
import {Ingredient} from "../../shared/ingredients.model";
import { ShoppingListService } from './shopping-list.service';



@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
  // providers: [ShoppingListService]
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[]
  empytList = true

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.empytList = this.shoppingListService.empytList
    this.shoppingListService.ingredientChanged
      .subscribe(
        (ingredients: Ingredient[]) => {
          this.ingredients = ingredients
          if (this.ingredients.length !== 0) {
            this.empytList = false
          }
        }
      );
   }

  onEdittinf(index: number){
    
  }

  // addIngredients(ingredient: Ingredient): void{
  //   if(ingredient.name != '' && ingredient.amount.toString() != '' && ingredient.amount !== 0){
  //     this.invalidIngredient = false;
  //     this.ingredients = this.shoppingListService.addIngredient(ingredient);
  //     this.empytList = false;

  //   } else {
  //     this.invalidIngredient = true
  //   }
  // }

  deleteIngredient(): void {
    // this.ingredients.splice( this.ingredients.length-1, 1 )
    this.shoppingListService.deleteIngredient();
    this.ingredients = this.shoppingListService.getIngredients();
    if(this.ingredients.length == 0) {
      this.empytList = this.shoppingListService.empytList
    };
  }

  clearIngredients(): void {
    this.ingredients = this.shoppingListService.clearIngredients();
    this.empytList = this.shoppingListService.empytList;
  }
}
