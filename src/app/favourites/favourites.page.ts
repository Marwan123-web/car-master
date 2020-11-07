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
  AllFavouritesCarsImageToShow: Array<any> = [];
  favouritescarPhoto: any;
  isImageLoading: boolean;
  FavouritesCarsArrayOfImages: Array<any> = [];
  constructor(public router: Router, private alertservice: AlertService, private translateConfigService: TranslateConfigService, private appservices: AppServicesService, private _Activatedroute: ActivatedRoute, private authservice: AuthService,) {
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
    if (this.authservice.currentUserValue) {
      this.currentUser = this.authservice.currentUserValue;
    }
  }
  emptyFavouritescarsimageToShow() {
    //empty your array
    this.AllFavouritesCarsImageToShow.length = 0;
  }
  getMyFavourites() {
    this.sub = this._Activatedroute.paramMap.subscribe(params => {
      this.appservices.getMyFavourties(this.currentUser._id).subscribe(res => {
        this.myFavourites = res;
        this.emptyFavouritescarsimageToShow();
        for (let i = 0; i < this.myFavourites.length; i++) {
          this.favouritescarPhoto = this.myFavourites[i].x.Images[0].filename;
          this.isImageLoading = true;
          this.appservices.getCarImages(this.favouritescarPhoto).subscribe(data => {
            this.createImageFromBlob(data);
            this.isImageLoading = false;
          }, error => {
            this.isImageLoading = false;
            console.log(error);
          });
        }
      }, err => {
        this.myFavourites = err;
      });
    });
  }
  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      this.AllFavouritesCarsImageToShow.push(reader.result);
    }, false);
    if (image) {
      reader.readAsDataURL(image);
    }
    this.FavouritesCarsArrayOfImages = this.AllFavouritesCarsImageToShow;
  }
  ngOnInit() {
    this.getMyFavourites();
  }

}
