import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';

import { ArticleDTO, RawFormValue } from './helpers/ArticleDTO';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  public form: FormGroup;
  public controls: {
    firstName: AbstractControl;
    lastName: AbstractControl;
    age: AbstractControl;
  };

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      age: [''],
    });
  }

  submit() {
    if (this.form.valid) {
      const article = new ArticleDTO(this.form.value as RawFormValue);
      // now send the article DTO to the backend using one of the services
    }
  }
}
