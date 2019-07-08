import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KoramudetailsPage } from './koramudetails.page';

describe('KoramudetailsPage', () => {
  let component: KoramudetailsPage;
  let fixture: ComponentFixture<KoramudetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KoramudetailsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KoramudetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
