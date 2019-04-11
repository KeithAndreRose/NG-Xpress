import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderFeatureComponent } from './header-feature.component';

describe('HeaderFeatureComponent', () => {
  let component: HeaderFeatureComponent;
  let fixture: ComponentFixture<HeaderFeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderFeatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
