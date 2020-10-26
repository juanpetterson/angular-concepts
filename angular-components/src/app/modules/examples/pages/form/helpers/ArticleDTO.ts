export class ArticleDTO {
  firstName: string;
  lastName: string;
  age: number;
  date: string;
  referenceIds: number[];

  constructor(formValue: RawFormValue) {
    this.firstName = formValue.firstName;
    this.lastName = formValue.tags.join(',');
    this.age = formValue.age;
    this.date = formValue.date.toISOString();
    if (formValue.referenceIds && formValue.referenceIds.length > 0) {
      this.referenceIds = formValue.referenceIds;
    }
  }
}

export interface RawFormValue {
  firstName: string;
  lastName: string;
  age: number;
  tags: string[];
  date: Date;
  referenceIds?: number[];
}
