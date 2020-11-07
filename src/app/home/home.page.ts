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
    autoplay: true
  };
  slideOpts1 = {
    initialSlide: 0,
    speed: 900,
    autoplay: true
  };

  RecentCarsdata: any;
  sub: any;
  MostViewsCarsdata: any;
  selectedLanguage: string;
  currentUser: User;
  isImageLoading: boolean;
  carPhoto: any;
  RecentCarsImageToShow: Array<any> = [];
  RecentCarsArrayOfImages: Array<any> = [];
  MostViewedcarPhoto: any;
  MostViewsCarsImageToShow: Array<any> = [];
  MostViewsCarsArrayOfImages: Array<any> = [];
  constructor(private authservice: AuthService, private appservices: AppServicesService, private router: Router, private translateConfigService: TranslateConfigService, private route: ActivatedRoute, private alertservice: AlertService, private _Activatedroute: ActivatedRoute,
  ) {
    this.authservice.currentUser.subscribe(x => this.currentUser = x);
    this.currentUser = this.authservice.currentUserValue;
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
  }
  emptyRecentimageToShow() {
    //empty your array
    this.RecentCarsImageToShow.length = 0;
  }
  getRecentCars() {
    this.sub = this._Activatedroute.paramMap.subscribe(params => {
      this.appservices.getRecentCars().subscribe(res => {
        this.RecentCarsdata = res;
        this.emptyRecentimageToShow();
        for (let i = 0; i < this.RecentCarsdata.length; i++) {
          this.carPhoto = this.RecentCarsdata[i].Images[0].filename;
          this.isImageLoading = true;
          this.appservices.getCarImages(this.carPhoto).subscribe(data => {
            this.createImageFromBlob(data);
            this.isImageLoading = false;
          }, error => {
            this.isImageLoading = false;
            console.log(error);
          });

        }
      }, err => {
        this.RecentCarsdata = err;
      });
    });
  }
  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      this.RecentCarsImageToShow.push(reader.result);
    }, false);
    if (image) {
      reader.readAsDataURL(image);
    }
    this.RecentCarsArrayOfImages = this.RecentCarsImageToShow;
  }


  emptyMostViewedimageToShow() {
    //empty your array
    this.RecentCarsImageToShow.length = 0;
  }
  getMostViewsCars() {
    this.sub = this._Activatedroute.paramMap.subscribe(params => {
      this.appservices.MostViewsCars().subscribe(res => {
        this.MostViewsCarsdata = res;
        this.emptyMostViewedimageToShow();
        for (let i = 0; i < this.MostViewsCarsdata.length; i++) {
          this.MostViewedcarPhoto = this.MostViewsCarsdata[i].Images[0].filename;
          this.isImageLoading = true;
          this.appservices.getCarImages(this.MostViewedcarPhoto).subscribe(data => {
            this.createMostViewedImageFromBlob(data);
            this.isImageLoading = false;
          }, error => {
            this.isImageLoading = false;
            console.log(error);
          });

        }
      }, err => {
        this.MostViewsCarsdata = err;
      }
      );
    });
  }
  createMostViewedImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      this.MostViewsCarsImageToShow.push(reader.result);
    }, false);
    if (image) {
      reader.readAsDataURL(image);
    }
    this.MostViewsCarsArrayOfImages = this.MostViewsCarsImageToShow;
  }


  languageChanged() {
    this.translateConfigService.setLanguage(this.selectedLanguage);
  }

  ngOnInit(): void {
    this.getRecentCars();
    this.getMostViewsCars();
  }
}
