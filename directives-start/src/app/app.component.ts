import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numbers = [1, 2, 3, 4, 5];
  oddNumb = [1, 3, 5];
  evenNumb = [2, 4];
  onlyOdd = false;
}


