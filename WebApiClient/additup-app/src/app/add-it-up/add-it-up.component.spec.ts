import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddItUpComponent } from './add-it-up.component';

describe('AddItUpComponent', () => {
  let component: AddItUpComponent;
  let fixture: ComponentFixture<AddItUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddItUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddItUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
