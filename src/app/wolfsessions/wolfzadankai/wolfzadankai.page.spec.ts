import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WolfzadankaiPage } from './wolfzadankai.page';

describe('WolfzadankaiPage', () => {
  let component: WolfzadankaiPage;
  let fixture: ComponentFixture<WolfzadankaiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WolfzadankaiPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WolfzadankaiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
