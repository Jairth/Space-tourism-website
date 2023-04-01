/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VictorComponent } from './victor.component';

describe('VictorComponent', () => {
  let component: VictorComponent;
  let fixture: ComponentFixture<VictorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VictorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VictorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
