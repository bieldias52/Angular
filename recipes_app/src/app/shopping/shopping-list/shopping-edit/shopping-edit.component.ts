import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {  NgForm } from '@angular/forms';
import { Ingredient } from "../../../shared/ingredients.model";
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  // @ViewChild('nameInput', { static:false }) nameInputRef: ElementRef
  // @ViewChild('amountInput', { static:false }) amountInputRef: ElementRef

  // @Output() newIngredient = new EventEmitter<Ingredient>()
  @Output() removeIngredient = new EventEmitter<void>()
  @Output() clear = new EventEmitter<void>()
  warning = false

  constructor(private shoppingListService: ShoppingListService) { }
  ngOnInit(): void {
  }

  addIngredient(form: NgForm){
    const name = form.value.name
    const amount = form.value.amount
    const nIngredient = new Ingredient(name, amount)
    this.shoppingListService.addIngredient(nIngredient)
    this.warning = this.shoppingListService.warning
  }

  deleteIngredient(){
    this.removeIngredient.emit()
  }

  clearIngredients(){
    this.clear.emit()
  }
}
