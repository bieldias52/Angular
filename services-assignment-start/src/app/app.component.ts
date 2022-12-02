import {Component, OnInit} from '@angular/core';
import {UsersService} from './users.service';
import {CounterService} from './counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsersService, CounterService]
})
export class AppComponent {

  // constructor(private usersService: UsersService,
  //             private counterService: CounterService) {}


//   activeUsers = ['Max', 'Anna'];
//   inactiveUsers = ['Chris', 'Manu'];
//
//   onSetToInactive(id: number) {
//     this.inactiveUsers.push(this.activeUsers[id]);
//     this.activeUsers.splice(id, 1);
//   }
//
//   onSetToActive(id: number) {
//     this.activeUsers.push(this.inactiveUsers[id]);
//     this.inactiveUsers.splice(id, 1);
//   }
}
