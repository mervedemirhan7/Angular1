/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Sayfa1Component } from './sayfa1.component';

describe('Sayfa1Component', () => {
  let component: Sayfa1Component;
  let fixture: ComponentFixture<Sayfa1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sayfa1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sayfa1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
