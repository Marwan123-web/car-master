import { Component, OnInit } from '@angular/core';
import { AlertService } from '../services/alert.service';
import { TranslateConfigService } from '../services/translate-config.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User, Role } from '../_models';
import { AppServicesService } from '../services/app-services.service';
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.page.html',
  styleUrls: ['./change-password.page.scss'],
})
export class changePasswordPage implements OnInit {
  password: string;
  confirm_password: string;
  matching_passwords_group: FormGroup;
  selectedLanguage: string;
  validations_form: FormGroup;
  showPassword = false;
  passwordToggleIcon = "eye";
  showConfirmPassword = false;
  confirmPasswordToggleIcon = "eye";
  userpassword: any;
  oldpassword: string;
  currentUser: User;
  checked: any;

  static areEqual(formGroup: FormGroup) {
    let val;
    let valid = true;

    for (let key in formGroup.controls) {
      if (formGroup.controls.hasOwnProperty(key)) {
        let control: FormControl = <FormControl>formGroup.controls[key];

        if (val === undefined) {
          val = control.value
        } else {
          if (val !== control.value) {
            valid = false;
            break;
          }
        }
      }
    }

    if (valid) {
      return null;
    }

    return {
      areEqual: true
    };
  }

  constructor(private formBuilder: FormBuilder, public router: Router, private alertservice: AlertService, private translateConfigService: TranslateConfigService, private authenticationService: AuthService, private appservices: AppServicesService,) {
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
    this.currentUser = this.authenticationService.currentUserValue;
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;

    if (this.passwordToggleIcon == "eye") {
      this.passwordToggleIcon = "eye-off";
    } else {
      this.passwordToggleIcon = "eye";
    }
  }

  toggleConfirmPassword(): void {
    this.showConfirmPassword = !this.showConfirmPassword;

    if (this.confirmPasswordToggleIcon == "eye") {
      this.confirmPasswordToggleIcon = "eye-off";
    } else {
      this.confirmPasswordToggleIcon = "eye";
    }
  }

  changePassword() {
    let password = document.getElementById("passwordinput") as HTMLInputElement;
    let confirm_password = document.getElementById("confirmpasswordinput") as HTMLInputElement;
    let oldpassword = document.getElementById("oldpasswordinput") as HTMLInputElement;

    this.password = password.value;
    this.oldpassword = oldpassword.value;

    this.appservices.comparepassword(this.currentUser._id, this.oldpassword).subscribe(res => {
      this.checked = res;
      this.appservices.changePassword(this.currentUser._id, this.password).subscribe(res => {
        this.alertservice.showAlert("&#xE876;", "success", res.msg);
        password.value = "";
        confirm_password.value = "";
        this.navigateToSettings();
      }, err => {
        this.alertservice.showAlert("&#xE5CD;", "error", err.error.msg);
      });
    }, err => {
      this.checked = err;
      this.alertservice.showAlert("&#xE5CD;", "error", "Your old password is Wrong");
    });

  }
  navigateToSettings() {
    this.router.navigate(['/tabs/profile/settings']);
  }
  languageChanged() {
    this.translateConfigService.setLanguage(this.selectedLanguage);
  }

  ngOnInit(): void {
    this.matching_passwords_group = new FormGroup({
      password: new FormControl('', Validators.compose([
        Validators.minLength(8),
        Validators.required,
        // Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
      ])),
      confirm_password: new FormControl('', Validators.compose([
        Validators.minLength(8),
        Validators.required,
        // Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
      ]))
    }, (formGroup: FormGroup) => {
      return changePasswordPage.areEqual(formGroup);
    });

    this.validations_form = this.formBuilder.group({
      matching_passwords: this.matching_passwords_group,
      oldPassword: new FormControl('', Validators.compose([
        Validators.minLength(8),
        Validators.required,
        // Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
      ]))
    });

  }

  validation_messages = {
    'password': [
      { type: 'required', message: 'NEWPASSWORDISREQUIRED' },
      { type: 'minlength', message: 'PASSWORDMUSTBEATLEAST8CHARACTERSLONG' },
      // { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number.' }
    ],
    'oldPassword': [
      { type: 'required', message: 'YOURPASSWORDISREQUIRED' },
      { type: 'minlength', message: 'PASSWORDMUSTBEATLEAST8CHARACTERSLONG' },
    ],
    'confirm_password': [
      { type: 'required', message: 'CONFIRMNEWPASSWORDISREQUIRED' }
    ],
    'matching_passwords': [
      { type: 'areEqual', message: 'PASSWORDSMISMATCH' }
    ]

  };
}
