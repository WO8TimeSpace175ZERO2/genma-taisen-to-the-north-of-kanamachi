import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrapbookPage } from './scrapbook.page';

describe('ScrapbookPage', () => {
  let component: ScrapbookPage;
  let fixture: ComponentFixture<ScrapbookPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrapbookPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrapbookPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
