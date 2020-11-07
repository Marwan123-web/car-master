import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { AppServicesService } from '../services/app-services.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateConfigService } from '../services/translate-config.service';
import { AuthService } from '../services/auth.service';
import { User } from '../_models';
import { AlertService } from '../services/alert.service';

@Component({
  selector: 'app-preowned-cars',
  templateUrl: 'preowned-cars.page.html',
  styleUrls: ['preowned-cars.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class preownedCarsPage implements OnInit {
  selectedLanguage: string;
  currentUser: User;
  sub: any;
  UsedCarsdata: any;
  PreownedCarsImageToShow: Array<any> = [];
  PreownedCarsArrayOfImages: Array<any> = [];
  preownedcarPhoto: any;
  isImageLoading: boolean;
  constructor(private authservice: AuthService, private appservices: AppServicesService, private router: Router, private translateConfigService: TranslateConfigService, private route: ActivatedRoute, private alertservice: AlertService, private _Activatedroute: ActivatedRoute,
  ) {
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
    if (this.authservice.currentUserValue) {
      this.currentUser = this.authservice.currentUserValue;
    }
  }
  emptypreownedcarsimageToShow() {
    //empty your array
    this.PreownedCarsImageToShow.length = 0;
  }
  getUsedCars() {
    this.sub = this._Activatedroute.paramMap.subscribe(params => {
      this.appservices.getUsedCars().subscribe(res => {
        this.UsedCarsdata = res;
        this.emptypreownedcarsimageToShow();
        for (let i = 0; i < this.UsedCarsdata.length; i++) {
          this.preownedcarPhoto = this.UsedCarsdata[i].Images[0].filename;
          this.isImageLoading = true;
          this.appservices.getCarImages(this.preownedcarPhoto).subscribe(data => {
            this.createImageFromBlob(data);
            this.isImageLoading = false;
          }, error => {
            this.isImageLoading = false;
            console.log(error);
          });
        }
      }, err => {
        this.UsedCarsdata = err;
      }
      );
    });
  }
  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      this.PreownedCarsImageToShow.push(reader.result);
    }, false);
    if (image) {
      reader.readAsDataURL(image);
    }
    this.PreownedCarsArrayOfImages = this.PreownedCarsImageToShow;
  }
  ngOnInit(): void {
    this.getUsedCars();
  }
}
