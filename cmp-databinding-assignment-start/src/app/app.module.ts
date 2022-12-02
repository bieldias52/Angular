import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { Gamecontrol } from './gamecontrol.component/gamecontrol.component.component';
import { Odd } from './odd.component/odd.component.component';
import { Even } from './even.component/even.component.component';

@NgModule({
  declarations: [
    AppComponent,
    Gamecontrol.ComponentComponent,
    Odd.ComponentComponent,
    Even.ComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
