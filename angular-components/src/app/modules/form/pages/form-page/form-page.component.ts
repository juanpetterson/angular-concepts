import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss'],
})
export class FormPageComponent implements OnInit {
  public form: FormGroup;
  // public formArray: FormArray;

  constructor(private formBuilder: FormBuilder) {}

  get rowsArray(): FormArray {
    return this.form.get('rows') as FormArray;
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      rows: this.formBuilder.array(
        [this.getRowGroup()],
        this.duplicatedValueValidator()
      ),
    });
  }

  addRow(): void {
    this.rowsArray.push(this.getRowGroup());
  }

  removeRow(index: number): void {
    this.rowsArray.removeAt(index);
  }

  getRowGroup(): FormGroup {
    return this.formBuilder.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
    });
  }

  duplicatedValueValidator(): ValidatorFn {
    return (formArray: FormArray): { [key: string]: any } | null => {
      console.log(formArray.controls);

      const valuesMap = new Map<string, AbstractControl>();

      formArray.controls.forEach((control) => {
        const ageValue = control.get('age').value;
        const ageMapValue = valuesMap.get(ageValue);

        if (ageMapValue) {
          ageMapValue.setErrors({
            ...ageMapValue.errors,
            duplicatedValue: true,
          });

          control.setErrors({ ...control.errors, duplicatedValue: true });
        }

        ageValue && valuesMap.set(ageValue, control);
      });

      return null;
    };
  }
}
