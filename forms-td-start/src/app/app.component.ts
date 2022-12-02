import {Component, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') submitted: NgForm;
  send = false;
  defaultQuestion = 'pet';
  answer: string;
  genders = ['male', 'female', 'other'];
  user = {
    username: '',
    email: '',
    secret: '',
    answer: '',
    gender: ''
  };

  suggestUserName() {
    const suggestedName = 'Superuser';
    this.submitted.form.patchValue({
      userData: {
        userName: suggestedName
      }
    });
  }

  onSubmit() {
    this.send = true;
    this.user.username = this.submitted.value.userData.userName;
    this.user.email = this.submitted.value.userData.email;
    this.user.secret = this.submitted.value.secret;
    this.user.answer = this.submitted.value.answer;
    this.user.gender = this.submitted.value.gender;
    this.submitted.reset();
  }
}
