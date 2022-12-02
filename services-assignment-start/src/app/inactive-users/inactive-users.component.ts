import { Component, OnInit} from '@angular/core';
import {UsersService} from '../users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css'],
  // providers: [UsersService]
})
export class InactiveUsersComponent implements OnInit {
   users: string[];
   changes = 0;
  // @Input() n: number;
  // @Output() userSetToActive = new EventEmitter<number>();

  constructor(private userService: UsersService) {}

  ngOnInit() {
    this.users = this.userService.inactiveUsers;
  }

  onSetToActive(id: number) {
    this.userService.setToActive(id);
    this.changes++;
    // this.userSetToActive.emit(id);
  }
}
