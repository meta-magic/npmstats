import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedmeComponent } from './redme.component';

describe('RedmeComponent', () => {
  let component: RedmeComponent;
  let fixture: ComponentFixture<RedmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedmeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
