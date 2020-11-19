import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { AppServicesService } from '../services/app-services.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateConfigService } from '../services/translate-config.service';
import { AuthService } from '../services/auth.service';
import { AlertService } from '../services/alert.service';
import { User } from '../_models';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class homePage implements OnInit {
  // Optional parameters to pass to the swiper instance.
  // See http://idangero.us/swiper/api/ for valid options.
  slideOpts = {
    initialSlide: 0,
    speed: 500,
    autoplay: {
      disableOnInteraction: false
    }
  };
  slideOpts1 = {
    initialSlide: 0,
    speed: 900,
    autoplay: {
      disableOnInteraction: false
    }
  };

  RecentCarsdata: any;
  sub: any;
  MostViewsCarsdata: any;
  selectedLanguage: string;
  currentUser: User;

  url: any = "https://cairo-belguim.herokuapp.com";
  // url: any = "http://192.168.1.7:3000";
  constructor(private authservice: AuthService, private appservices: AppServicesService, private router: Router, private translateConfigService: TranslateConfigService, private route: ActivatedRoute, private alertservice: AlertService, private _Activatedroute: ActivatedRoute,
  ) {
    this.authservice.currentUser.subscribe(x => this.currentUser = x);
    this.currentUser = this.authservice.currentUserValue;
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
  }

  getRecentCars() {
    this.sub = this._Activatedroute.paramMap.subscribe(params => {
      this.appservices.getRecentCars().subscribe(res => {
        this.RecentCarsdata = res;
      }, err => {
        this.RecentCarsdata = err;
      });
    });
  }


  getMostViewsCars() {
    this.sub = this._Activatedroute.paramMap.subscribe(params => {
      this.appservices.MostViewsCars().subscribe(res => {
        this.MostViewsCarsdata = res;
      }, err => {
        this.MostViewsCarsdata = err;
      }
      );
    });
  }


  languageChanged() {
    this.translateConfigService.setLanguage(this.selectedLanguage);
  }

  ngOnInit(): void {
    this.getRecentCars();
    this.getMostViewsCars();
  }
}
