/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Sayfa2Component } from './sayfa2.component';

describe('Sayfa2Component', () => {
  let component: Sayfa2Component;
  let fixture: ComponentFixture<Sayfa2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sayfa2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sayfa2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
