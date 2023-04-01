/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AnsariComponent } from './ansari.component';

describe('AnsariComponent', () => {
  let component: AnsariComponent;
  let fixture: ComponentFixture<AnsariComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnsariComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnsariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
