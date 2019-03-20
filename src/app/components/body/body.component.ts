import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  loginForm = true;
  registerForm = false;
  constructor() { }

  ngOnInit() {
  }

  login(e) {
    e.preventDefault();
    console.log('Hey');
  }

  register(e) {
    e.preventDefault();
    console.log('Register');
  }
}
