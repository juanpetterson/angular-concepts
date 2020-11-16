import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-with-switch',
  templateUrl: './with-switch.component.html',
  styleUrls: ['./with-switch.component.scss'],
})
export class WithSwitchComponent implements OnInit {
  selectedTheme;

  constructor() {}

  ngOnInit(): void {}

  public selectionChanged() {
    switch (this.selectedTheme) {
      case 'dark':
        console.log('changed theme to dark');
        // do something more with the theme
        break;
      case 'light':
        console.log('changed theme to light');
        // do something more with the theme
        break;
      case 'red':
        console.log('changed theme to red');
        // do something more with the theme
        break;
      case 'green':
        console.log('changed theme to green');
        // do something more with the theme
        break;
      default:
        console.log('What ever..');
    }
  }
}
