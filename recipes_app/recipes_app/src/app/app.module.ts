import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { HeaderComponent } from "./header/header.component";
import { RecipesItemsComponent } from './recipes/recipes-list/recipes-items/recipes-items.component';
import { ShoppingListComponent } from './shopping/shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipesDetailsComponent } from "./recipes/recipes-details/recipes-details.component";
import { RecipesListComponent } from "./recipes/recipes-list/recipes-list.component";
import { ShoppingEditComponent } from './shopping/shopping-list/shopping-edit/shopping-edit.component';
import { ShoppingListService } from './shopping/shopping-list/shopping-list.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesItemsComponent,
    ShoppingListComponent,
    RecipesComponent,
    RecipesDetailsComponent,
    RecipesListComponent,
    ShoppingEditComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,

  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
