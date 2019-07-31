import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KirinukiComponent } from './kirinuki.component';

describe('KirinukiComponent', () => {
  let component: KirinukiComponent;
  let fixture: ComponentFixture<KirinukiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KirinukiComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KirinukiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
