import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css'],
  // providers: [UsersService]
})
export class ActiveUsersComponent implements OnInit {
  users: string[];
  changes = 0;
  // @Input() n: number;
  // @Output() userSetToInactive = new EventEmitter<number>();

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.users = this.usersService.activeUsers;
  }

  onSetToInactive(id: number) {
    this.usersService.setToInactive(id);
    this.changes++;
    // this.userSetToInactive.emit(id);
  }
}
