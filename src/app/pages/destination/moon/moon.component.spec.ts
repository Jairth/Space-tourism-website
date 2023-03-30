/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MoonComponent } from './moon.component';

describe('MoonComponent', () => {
  let component: MoonComponent;
  let fixture: ComponentFixture<MoonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
