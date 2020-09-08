import { Component } from '@angular/core';
import { Subject, timer } from 'rxjs';
import { switchMapTo, startWith, mapTo } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  retrigger$ = new Subject<void>();

  refresh$ = this.retrigger$.pipe(
    switchMapTo(timer(100).pipe(mapTo(true), startWith(false))),
    startWith(true)
  );

  onClick() {
    this.retrigger$.next();
  }
}
