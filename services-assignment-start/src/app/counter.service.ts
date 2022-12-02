import {Injectable} from '@angular/core';

@Injectable()
export class CounterService {

  activeChanges = 0;
  inactiveChanges = 0;

  activeTo() {
    this.activeChanges++;
    console.log(this.activeChanges);
  }

  inactiveTo() {
    this.inactiveChanges++;
    console.log(this.inactiveChanges);
  }

}
