import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IshimoriShotaroLetterPage } from './ishimori-shotaro-letter.page';

describe('IshimoriShotaroLetterPage', () => {
  let component: IshimoriShotaroLetterPage;
  let fixture: ComponentFixture<IshimoriShotaroLetterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IshimoriShotaroLetterPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IshimoriShotaroLetterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
