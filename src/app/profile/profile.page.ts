import { Component } from '@angular/core';
import { TranslateConfigService } from '../services/translate-config.service';
import { AuthService } from '../services/auth.service';
import { User } from '../_models';
@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss']
})
export class profilePage {
  selectedLanguage: any;
  currentUser: User;
  constructor(private translateConfigService: TranslateConfigService, private authservice: AuthService,) {
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
    if (this.authservice.currentUserValue) {
      this.currentUser = this.authservice.currentUserValue;
    }
  }

}
