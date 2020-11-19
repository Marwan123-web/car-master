import { Component, OnInit } from '@angular/core';
import { TranslateConfigService } from '../services/translate-config.service';
import { AuthService } from '../services/auth.service';
import { User } from '../_models';
import { ActivatedRoute, Router } from '@angular/router';
import { AppServicesService } from '../services/app-services.service';
import { AlertService } from '../services/alert.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.page.html',
  styleUrls: ['./favourites.page.scss'],
})
export class FavouritesPage implements OnInit {
  selectedLanguage: any;
  currentUser: User;
  sub: any;
  myFavourites: any;
  carId: any;
  url: any = "https://cairo-belguim.herokuapp.com";
  // url: any = "http://192.168.1.7:3000";
  constructor(public router: Router, private alertservice: AlertService, private translateConfigService: TranslateConfigService, private appservices: AppServicesService, private _Activatedroute: ActivatedRoute, private authservice: AuthService,) {
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
    if (this.authservice.currentUserValue) {
      this.currentUser = this.authservice.currentUserValue;
    }
  }
  getMyFavourites() {
    this.sub = this._Activatedroute.paramMap.subscribe(params => {
      this.appservices.getMyFavourties(this.currentUser._id).subscribe(res => {
        this.myFavourites = res;
      }, err => {
        this.myFavourites = err;
      });
    });
  }
  ngOnInit() {
    this.getMyFavourites();
  }

}
