import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooteristicLayoutComponent } from './footeristic-layout.component';

describe('FooteristicLayoutComponent', () => {
  let component: FooteristicLayoutComponent;
  let fixture: ComponentFixture<FooteristicLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooteristicLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooteristicLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
