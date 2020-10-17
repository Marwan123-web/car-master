import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateConfigService } from '../services/translate-config.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: 'contact-us.page.html',
  styleUrls: ['contact-us.page.scss']
})
export class contactUsPage implements OnInit {
  selectedLanguage: any;
  name: string;
  email: string;
  message: string;
  validations_form: FormGroup;
  constructor(private translateConfigService: TranslateConfigService, private formBuilder: FormBuilder,) {
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
  }

  ngOnInit(): void {
    this.validations_form = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+.com')
      ])),
      message: new FormControl('', Validators.required),
    });


  }

  validation_messages = {
    'name': [
      { type: 'required', message: 'Name is required.' }
    ],
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Please enter a valid email.' }
    ],
    'message': [
      { type: 'required', message: 'Message is required.' }
    ]
  };

}
