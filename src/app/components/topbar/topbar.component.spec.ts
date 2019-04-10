import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopbarComponent } from './topbar.component';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';

describe('TopbarComponent', () => {
  let component: TopbarComponent;
  let fixture: ComponentFixture<TopbarComponent>;

  let deReg: DebugElement;
  let deLogin: DebugElement;
  let loginBtn: HTMLElement;
  let registerBtn: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create top bar', () => {
    expect(component).toBeTruthy();
  });

  it('loggged_in should be false', () => {
    expect(component.loggedIn).toBeFalsy();
  });

  // it('should have a login button', () => {
  //   fixture = TestBed.createComponent(TopbarComponent);
  //   component = fixture.componentInstance;
  //   deLogin = fixture.debugElement.query(By.css('.login'));
  //   loginBtn = deLogin.nativeElement;
  //   expect(loginBtn.innerHTML).toContain('Login');
  // });
  //
  // it('should have a register button', () => {
  //   fixture = TestBed.createComponent(TopbarComponent);
  //   component = fixture.componentInstance;
  //   deReg = fixture.debugElement.query(By.css('.register'));
  //   registerBtn  = deReg.nativeElement;
  //   expect(registerBtn.innerHTML).toContain('Register');
  // });
});
