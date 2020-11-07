import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { AppServicesService } from '../services/app-services.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateConfigService } from '../services/translate-config.service';
import { AuthService } from '../services/auth.service';
import { User } from '../_models';
import { AlertService } from '../services/alert.service';

@Component({
  selector: 'app-notifications',
  templateUrl: 'notifications.page.html',
  styleUrls: ['notifications.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class notifications implements OnInit {
  selectedLanguage: string;
  currentUser: User;
  sub: any;
  AllCarsArrayOfImages: Array<any> = [];
  AllCarsImageToShow: Array<any> = [];
  isImageLoading: boolean;
  AllCarsImagesPath: any;

  constructor(private authservice: AuthService, private appservices: AppServicesService, private router: Router, private translateConfigService: TranslateConfigService, private route: ActivatedRoute, private alertservice: AlertService, private _Activatedroute: ActivatedRoute,
  ) {
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
    if (this.authservice.currentUserValue) {
      this.currentUser = this.authservice.currentUserValue;
    }
  }
  emptyAllcarsimageToShow() {
    //empty your array
    this.AllCarsImageToShow.length = 0;
  }
  getAllCarsImages() {
    this.sub = this._Activatedroute.paramMap.subscribe(params => {
      this.appservices.getAllCarImages().subscribe(res => {
        this.emptyAllcarsimageToShow();
        this.AllCarsImagesPath = res;
        for (let i = 0; i < this.AllCarsImagesPath.length; i++) {
          // this.allcarPhoto = this.AllMostViewsCarsdata[i].Images[0].filename;
          this.isImageLoading = true;
          this.appservices.getCarImages(this.AllCarsImagesPath[i]).subscribe(data => {
            this.createImageFromBlob(data);
            this.isImageLoading = false;
          }, error => {
            this.isImageLoading = false;
            console.log(error);
          });
        }
      }, err => {
        this.AllCarsImagesPath = err;
      }
      );
    });
  }
  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      this.AllCarsImageToShow.push(reader.result);
    }, false);
    if (image) {
      reader.readAsDataURL(image);
    }
    this.AllCarsArrayOfImages = this.AllCarsImageToShow;
  }
  ngOnInit(): void {
    this.getAllCarsImages();
  }
}
