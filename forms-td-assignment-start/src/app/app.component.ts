import {Component, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('form', {static: false}) submitted: NgForm;
  defaultStatus = 'Advance';
  levels = ['Basic', 'Advance', 'Pro'];
  emailSelected: string;
  levelSelected: string;

  onSubmit() {
    console.log('User email: ' + this.submitted.value.email);
    console.log('User level: ' + this.submitted.value.level);
    console.log(this.submitted.value);
    this.emailSelected = this.submitted.value.email;
    this.levelSelected = this.submitted.value.level;
  }
}
