import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithSwitchComponent } from './with-switch.component';

describe('WithSwitchComponent', () => {
  let component: WithSwitchComponent;
  let fixture: ComponentFixture<WithSwitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithSwitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
