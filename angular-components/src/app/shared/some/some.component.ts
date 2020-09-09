import { Component, OnInit } from '@angular/core';
import { CommonBaseComponent } from '../common-base/common-base.component';

@Component({
  selector: 'app-some',
  templateUrl: './some.component.html',
  styleUrls: ['./some.component.scss'],
})
export class SomeComponent extends CommonBaseComponent {
  constructor(protected logger: LoggerService, protected envr: Environment) {
    super(logger, envr);
  }
}
