import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMasterDefaultsComponent } from './search-master-defaults.component';

describe('SearchMasterDefaultsComponent', () => {
  let component: SearchMasterDefaultsComponent;
  let fixture: ComponentFixture<SearchMasterDefaultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchMasterDefaultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchMasterDefaultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
