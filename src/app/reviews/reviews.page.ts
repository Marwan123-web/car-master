import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { AppServicesService } from '../services/app-services.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateConfigService } from '../services/translate-config.service';
import { AuthService } from '../services/auth.service';
import { User } from '../_models';
import { AlertService } from '../services/alert.service';

@Component({
  selector: 'app-reviews',
  templateUrl: 'reviews.page.html',
  styleUrls: ['reviews.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class reviews implements OnInit {
  selectedLanguage: string;
  currentUser: User;
  sub: any;
  AllMostViewsCarsdata: any;
  AllCarsImageToShow: Array<any> = [];
  AllCarsArrayOfImages: Array<any> = [];
  isImageLoading: boolean;
  allcarPhoto: any;
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
  getAllMostViewsCars() {
    this.sub = this._Activatedroute.paramMap.subscribe(params => {
      this.appservices.AllMostViewsCars().subscribe(res => {
        this.AllMostViewsCarsdata = res;
        this.emptyAllcarsimageToShow();
        for (let i = 0; i < this.AllMostViewsCarsdata.length; i++) {
          this.allcarPhoto = this.AllMostViewsCarsdata[i].Images[0].filename;
          this.isImageLoading = true;
          this.appservices.getCarImages(this.allcarPhoto).subscribe(data => {
            this.createImageFromBlob(data);
            this.isImageLoading = false;
          }, error => {
            this.isImageLoading = false;
            console.log(error);
          });

        }
      }, err => {
        this.AllMostViewsCarsdata = err;
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
    this.getAllMostViewsCars();

  }
}
