import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfIntroPage } from './self-intro.page';

describe('SelfIntroPage', () => {
  let component: SelfIntroPage;
  let fixture: ComponentFixture<SelfIntroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelfIntroPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfIntroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
