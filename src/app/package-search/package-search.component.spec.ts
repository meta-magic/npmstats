import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageSearchComponent } from './package-search.component';

describe('PackageSearchComponent', () => {
  let component: PackageSearchComponent;
  let fixture: ComponentFixture<PackageSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackageSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackageSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
