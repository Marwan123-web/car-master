import { Component } from '@angular/core';
import { TranslateConfigService } from '../services/translate-config.service';
import { User, Role } from '../_models';
import { AuthService } from '../services/auth.service';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  selectedLanguage: any;
  currentUser: User;
  constructor(private translateConfigService: TranslateConfigService,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar, private authservice: AuthService,) {
    this.authservice.currentUser.subscribe(x => this.currentUser = x);
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
    this.initializeApp();
    this.authservice.currentUser.subscribe(x => this.currentUser = x);
    this.platform.ready().then(() => {
      this.translateConfigService.setLanguage(localStorage["myConfig"]);
    });
  }
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  get isAdmin() {
    return this.currentUser && this.currentUser.role === Role.Admin;
  }

}
