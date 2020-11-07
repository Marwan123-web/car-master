import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { TranslateConfigService } from './services/translate-config.service';
import { AuthService } from './services/auth.service';
import { User } from './_models';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  currentUser: User;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private translateConfigService: TranslateConfigService,
    private authservice: AuthService,

  ) {
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
}
