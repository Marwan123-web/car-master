import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from '../services/alert.service';
import { TranslateConfigService } from '../services/translate-config.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-settings',
  templateUrl: 'settings.page.html',
  styleUrls: ['settings.page.scss']
})
export class settingsPage implements OnInit {
  selectedLanguage: any;
  DefaultLangValue: string;
  constructor(private translateConfigService: TranslateConfigService, public router: Router,private authservice: AuthService,
    private alertservice: AlertService) {
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
  }

  languageChanged() {
    this.translateConfigService.setLanguage(this.selectedLanguage);
    localStorage.setItem("myConfig", this.selectedLanguage);
  }

  logout() {
    this.authservice.logout();
    this.router.navigate(['/sign-in']);
    this.alertservice.showAlert2("&#xE876;", "success", "You have successfully logged out!");
  }

  ngOnInit(): void {
  }

}