import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KoramuPage } from './koramu.page';

describe('KoramuPage', () => {
  let component: KoramuPage;
  let fixture: ComponentFixture<KoramuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KoramuPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KoramuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
