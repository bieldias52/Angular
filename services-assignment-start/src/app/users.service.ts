import {Injectable} from '@angular/core';

import {CounterService} from './counter.service';

@Injectable()
export class UsersService {

  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];
  // n = 0;

  constructor(private counterService: CounterService) {}

  setToInactive(id: number) {
    this.counterService.activeTo();
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    // this.n++;
    // console.log(this.counterService.activeChanges);
  }

  setToActive(id: number) {
    this.counterService.inactiveTo();
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    // this.n++;
    // console.log(this.counterService.inactiveChanges);
  }

}
