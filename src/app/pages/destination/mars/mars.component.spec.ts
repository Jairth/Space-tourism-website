/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MarsComponent } from './mars.component';

describe('MarsComponent', () => {
  let component: MarsComponent;
  let fixture: ComponentFixture<MarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
