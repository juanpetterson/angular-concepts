import { Component, OnInit } from '@angular/core';

class ErrorItem {
  error?: HttpErrorResponse;
}
class successItem {
  success?: SuccessResponse;
}

@Component({
  selector: 'app-common-base',
  templateUrl: './common-base.component.html',
  styleUrls: ['./common-base.component.scss'],
})
export class CommonBaseComponent {
  handleErrors<T>(errors: ErrorItem[], optionalparam?: Array<T>) {
    // Call show Error component
  }
  showSuccess<T>(success: successItem[], optionalparam?: Array<T>) {
    // Call show Error component
  }
}
