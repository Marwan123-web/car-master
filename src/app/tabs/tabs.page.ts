import { Component } from '@angular/core';
import { TranslateConfigService } from '../services/translate-config.service';
import { User,Role } from '../_models';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  selectedLanguage: any;
  currentUser: User;
  constructor(private translateConfigService: TranslateConfigService, private authservice: AuthService,) {
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
    if (this.authservice.currentUserValue) {
      this.currentUser = this.authservice.currentUserValue;
    }
  }
  get isAdmin() {
    return this.currentUser && this.currentUser.role === Role.Admin;
  }

}
