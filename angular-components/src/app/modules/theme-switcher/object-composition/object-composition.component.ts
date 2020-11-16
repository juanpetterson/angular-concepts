import { Component, OnInit } from '@angular/core';

import { Theme } from '../models/theme.model';
import { addAvailableThemesToList } from '../facades/theme.facade';

@Component({
  selector: 'app-object-composition',
  templateUrl: './object-composition.component.html',
  styleUrls: ['./object-composition.component.scss'],
})
export class ObjectCompositionComponent implements OnInit {
  public selectedTheme: Theme;
  public themes: Theme[];

  constructor() {
    this.themes = new Array<Theme>();
  }

  ngOnInit(): void {
    this.themes = addAvailableThemesToList();
  }

  public selectionChanged(): void {
    // read abstract class
    console.log('changed theme to ' + this.selectedTheme.name);
  }

  public trackByFn(index, item: Theme): string {
    return item.name;
  }
}
