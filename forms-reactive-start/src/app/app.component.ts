import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female', 'transformer'];
  signedForm: FormGroup;
  fobiddenUsernames = ['Ablubleble', 'Jonas']


  ngOnInit() {
    this.signedForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl('', [Validators.required, this.fobiddenNames.bind(this)]),
        'email': new FormControl(null,
          [Validators.required, Validators.email], this.forbbidenEmails),
      }),
      'gender': new FormControl('transformer'),
      'hobbies': new FormArray([])
    }
    );
    this.signedForm.statusChanges.subscribe(
      (status) => { console.log(status) })
  }

  onSubmit() {
    console.log(this.signedForm);
  }

  getControls() {
    return (<FormArray>this.signedForm.get('hobbies')).controls

  }

  addHobby() {
    let control = new FormControl(null, Validators.required);
    (<FormArray>this.signedForm.get('hobbies')).push(control);
  }

  removeHobby() {
    let index = ((<FormArray>this.signedForm.get('hobbies')).length - 1);
    (<FormArray>this.signedForm.get('hobbies')).removeAt(index);
  }

  fobiddenNames(control: FormControl): { [s: string]: boolean } {
    if (this.fobiddenUsernames.indexOf(control.value) !== -1) {
      return { 'nameIsForbidden': true }
    }
    return null
  }

  forbbidenEmails(control: FormControl): Promise<any> | Observable<any> {
    let promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({ 'emailIsForbbiden': true })
        } else {
          resolve(null)
        }
      }, 1500)
    })
    return promise
  }

}