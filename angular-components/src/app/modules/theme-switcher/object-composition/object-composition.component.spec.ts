import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectCompositionComponent } from './object-composition.component';

describe('ObjectCompositionComponent', () => {
  let component: ObjectCompositionComponent;
  let fixture: ComponentFixture<ObjectCompositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjectCompositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectCompositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
