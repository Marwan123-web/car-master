import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { AppServicesService } from '../services/app-services.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateConfigService } from '../services/translate-config.service';
import { AuthService } from '../services/auth.service';
import { AlertService } from '../services/alert.service';
import { User } from '../_models';
class ImageSnippet {
  constructor(public src: string, public file: File) { }
}
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
    autoplay: true,
  };

  RecentCarsdata: any;
  sub: any;
  MostViewsCarsdata: any;
  selectedLanguage: string;
  currentUser: User;
  constructor(private authservice: AuthService, private appservices: AppServicesService, private router: Router, private translateConfigService: TranslateConfigService, private route: ActivatedRoute, private alertservice: AlertService, private _Activatedroute: ActivatedRoute,


  ) {
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
    if (this.authservice.currentUserValue) {
      this.currentUser = this.authservice.currentUserValue;
      console.log(this.currentUser)
    }
    else {
      console.log('no user yet')
    }
  }

  getRecentCars() {
    this.sub = this._Activatedroute.paramMap.subscribe(params => {
      this.appservices.getRecentCars().subscribe(res => {
        this.RecentCarsdata = res;
        // console.log(res[0]._id)
      }, err => {
        this.RecentCarsdata = err;
      }
      );
    });
  }
  getMostViewsCars() {
    this.sub = this._Activatedroute.paramMap.subscribe(params => {
      this.appservices.MostViewsCars().subscribe(res => {
        this.MostViewsCarsdata = res;
        // console.log(res)
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
