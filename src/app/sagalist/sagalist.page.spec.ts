import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SagalistPage } from './sagalist.page';

describe('SagalistPage', () => {
  let component: SagalistPage;
  let fixture: ComponentFixture<SagalistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SagalistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SagalistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
