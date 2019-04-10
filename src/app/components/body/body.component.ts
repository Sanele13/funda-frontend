import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpService} from '../../services/http.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  loginForm = false;
  registerForm = false;
  user=true;
  @ViewChild('signInForm') signInForm: ElementRef;
  @ViewChild('signUpForm') signUpForm: ElementRef;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
  }

  handleLogin(result,user){
    if(result.message == 'success'){
      //load
      this.loginForm = false;

      //loader


      this.user = user;
      console.log(this.user);
    }
  }

  handleRegistration(result){

  }
  login(e) {
    e.preventDefault();
    const user_data = {
      username: this.signInForm.nativeElement.username.value,
      password: this.signInForm.nativeElement.password.value
    };
    // validate form

    // display loading element

    // login
    //console.log(user_data);
    this._httpService.login(user_data).subscribe(result => {
      this.handleLogin(result,user_data);
    });
  }

  register(e) {
    e.preventDefault();

    const userData = {
      first_name: this.signUpForm.nativeElement.firstName.value,
      last_name: this.signUpForm.nativeElement.lastName.value,
      email: this.signUpForm.nativeElement.email.value,
      cell_number: this.signUpForm.nativeElement.tel.value,
      password: this.signUpForm.nativeElement.userPwd.value,
      password_confirm: this.signUpForm.nativeElement.confPwd.value,
      user_role: this.signUpForm.nativeElement.role.value
    };

    // validateForm()
    // display loading element

    // register
    this._httpService.register(userData).subscribe(result => {
      this.handleRegistration(result);
    });
    //return 'success';
  }
}
