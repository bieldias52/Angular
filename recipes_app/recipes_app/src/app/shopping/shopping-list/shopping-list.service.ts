import { EventEmitter } from "@angular/core";
import { Ingredient } from "src/app/shared/ingredients.model";

export class ShoppingListService {
    ingredientChanged = new EventEmitter<Ingredient[]>()
    private ingredientsList: Ingredient[] = [
        // new Ingredient('apple', 5),
        // new Ingredient('carrot', 3)
    ];
    empytList = true;
    warning = false;
    
    getIngredients(): Ingredient[]{ 
        return this.ingredientsList.slice()
    }

    addIngredient(ingredient: Ingredient) {
        if(ingredient.name !== '' && ingredient.amount.toString() !== '' && ingredient.amount !== 0){
          this.ingredientsList.push(ingredient)
          this.empytList = false
          this.warning = false
        } else {
            this.warning = true 
        }
      this.ingredientChanged.emit(this.ingredientsList.slice())
    }
    
    deleteIngredient(): Ingredient[] {
      this.ingredientsList.splice(this.ingredientsList.length - 1, 1)
      if (this.ingredientsList.length == 0) {
        this.empytList = true
      }
      return this.ingredientsList.slice()
        
    }

    clearIngredients(): Ingredient[] {
      this.empytList = true
      return this.ingredientsList = [];
    }

}