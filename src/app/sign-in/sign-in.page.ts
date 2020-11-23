import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { TranslateConfigService } from '../services/translate-config.service';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AlertService } from '../services/alert.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: 'sign-in.page.html',
  styleUrls: ['sign-in.page.scss']
})
export class signInPage implements OnInit {
  email: string;
  password: string;
  selectedLanguage: string;
  validations_form: FormGroup;
  returnUrl: string;
  showPassword = false;
  passwordToggleIcon = "eye";
  constructor(private authservice: AuthService, private router: Router, private translateConfigService: TranslateConfigService, private formBuilder: FormBuilder, private route: ActivatedRoute, private alertservice: AlertService,) {
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
    if (this.authservice.currentUserValue) {
      this.router.navigate(['/tabs/home']);
    }

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

  loginUser() {
    let emailinput = document.getElementById("emailinput") as HTMLInputElement;
    let passwordinput = document.getElementById("passwordinput") as HTMLInputElement;
    this.email = emailinput.value, this.password = passwordinput.value;
    this.authservice.login(this.email, this.password).pipe(first()).subscribe(res => {
      this.alertservice.showAlert("&#xE876;", "success", "You have successfully logged in!");
      this.validations_form.reset();
      this.router.navigate(['/tabs/home']);
    }, err => {
      this.alertservice.showAlert("&#xE5CD;", "error", "Email or Password is incorrect. please try logging in again!");
    }
    );

  }
  ngOnInit() {

    this.validations_form = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+.com')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(8),
        Validators.required,
      ])),
    });

  }

  validation_messages = {
    'email': [
      { type: 'required', message: 'EMAILISREQUIRED' },
      { type: 'pattern', message: 'PLEASEENTERAVALIDEMAIL' }
    ],
    'password': [
      { type: 'required', message: 'YOURPASSWORDISREQUIRED' },
      { type: 'minlength', message: 'PASSWORDMUSTBEATLEAST8CHARACTERSLONG' },
    ]
  };
}
