import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { TranslateConfigService } from '../services/translate-config.service';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AlertService } from '../services/alert.service';
import * as dateFormat from 'dateformat';
import { AppServicesService } from '../services/app-services.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: 'sign-up.page.html',
  styleUrls: ['sign-up.page.scss']
})
export class signUpPage {
  name: any;
  email: any;
  password: any;
  role: any;
  dataOfJoin: any;
  returnUrl: any = '/tabs/home';
  selectedLanguage: string;
  validations_form: FormGroup;
  customPopoverOptions: any;
  showPassword = false;
  passwordToggleIcon = "eye";
  firstname: any;
  lastname: any;
  phonenumber: any;
  constructor(private authservice: AuthService, private appservices: AppServicesService, private router: Router, private translateConfigService: TranslateConfigService, private formBuilder: FormBuilder, private route: ActivatedRoute, private alertservice: AlertService,) {
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();

  }
  togglePassword(): void {
    this.showPassword = !this.showPassword;

    if (this.passwordToggleIcon == "eye") {
      this.passwordToggleIcon = "eye-off";
    } else {
      this.passwordToggleIcon = "eye";
    }
  }

  languageChanged() {
    this.translateConfigService.setLanguage(this.selectedLanguage);
  }
  Register() {
    let firstname = document.getElementById("firstNameinput") as HTMLInputElement;
    let lastname = document.getElementById("lastNameinput") as HTMLInputElement;
    let email = document.getElementById("emailinput") as HTMLInputElement;
    let password = document.getElementById("passwordinput") as HTMLInputElement;
    let phonenumber = document.getElementById("phoneNumberinput") as HTMLInputElement;
    this.firstname = firstname.value, this.lastname = lastname.value, this.email = email.value, this.password = password.value, this.phonenumber = phonenumber.value;
    var now = new Date();
    this.dataOfJoin = dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT");
    this.appservices.Register(this.firstname, this.lastname, this.email, this.password, this.phonenumber, this.dataOfJoin).subscribe(res => {
      this.authservice.login(this.email, this.password).pipe(first()).subscribe(res => {
        this.alertservice.showAlert("&#xE876;", "success", res.msg);
        this.validations_form.reset();
        this.router.navigate([this.returnUrl]);
      }, err => {
        this.alertservice.showAlert("&#xE5CD;", "error", "Email or Password is incorrect. please try logging in again!");
      }
      );
    }, err => {
      this.alertservice.showAlert("&#xE5CD;", "error", err.error.msg);
    }
    );
  }
  ngOnInit(): void {
    this.validations_form = this.formBuilder.group({
      firstName: new FormControl('', Validators.compose([
        Validators.required
      ])),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+.com')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(8),
        Validators.required,
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
      ])),
      phoneNumber: new FormControl('', Validators.compose([
        Validators.minLength(8),
        Validators.required,
      ])),
    });


  }

  validation_messages = {
    'firstName': [
      { type: 'required', message: 'First Name is required.' }
    ],
    'lastName': [
      { type: 'required', message: 'Last Name is required.' }
    ],
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Please enter a valid email.' }
    ],
    'password': [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 8 characters long.' },
      { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number.' }
    ],
    'phoneNumber': [
      { type: 'required', message: 'Phone Number is required.' }
    ],
  };

}
