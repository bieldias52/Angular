import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs'
import { map, filter } from 'rxjs/operators'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private firstObservable: Subscription

  constructor() { }

  ngOnInit() {
    const customIntObserv = Observable.create(observer => {
      let count = 0
      setInterval(() => {
        observer.next(count)
        if ( count === 3){
          observer.complete()
        }
        if ( count > 2 ) {
          observer.error(new Error('deu ruim...'))
        }
        count++
      }, 1000)
    })



  this.firstObservable = customIntObserv.pipe(filter(data => data !== 1),map((data: number)=>{
    return ('round: ' + (data+1))
  })).subscribe(data => {
      console.log(data)
    },
    error => {
    console.log(error.message)
      alert(error)
  },
    () => {
    console.log('completou karai')
    })
  }


  ngOnDestroy():void {
    this.firstObservable.unsubscribe()
  }

}
