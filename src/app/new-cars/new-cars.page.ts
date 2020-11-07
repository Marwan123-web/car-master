import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { AppServicesService } from '../services/app-services.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateConfigService } from '../services/translate-config.service';
import { AuthService } from '../services/auth.service';
import { User } from '../_models';
import { AlertService } from '../services/alert.service';

@Component({
  selector: 'app-new-cars',
  templateUrl: 'new-cars.page.html',
  styleUrls: ['new-cars.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class newCarsPage implements OnInit {
  selectedLanguage: string;
  currentUser: User;
  sub: any;
  NewCarsdata: any;
  newcarPhoto: any;
  isImageLoading: boolean;
  NewCarsImageToShow: Array<any> = [];
  NewCarsArrayOfImages: Array<any> = [];

  constructor(private authservice: AuthService, private appservices: AppServicesService, private router: Router, private translateConfigService: TranslateConfigService, private route: ActivatedRoute, private alertservice: AlertService, private _Activatedroute: ActivatedRoute,
  ) {
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
    if (this.authservice.currentUserValue) {
      this.currentUser = this.authservice.currentUserValue;
    }
  }
  emptynewcarsimageToShow() {
    //empty your array
    this.NewCarsImageToShow.length = 0;
  }
  getNewCars() {
    this.sub = this._Activatedroute.paramMap.subscribe(params => {
      this.appservices.getNewCars().subscribe(res => {
        this.NewCarsdata = res;
        this.emptynewcarsimageToShow();
        for (let i = 0; i < this.NewCarsdata.length; i++) {
          this.newcarPhoto = this.NewCarsdata[i].Images[0].filename;
          this.isImageLoading = true;
          this.appservices.getCarImages(this.newcarPhoto).subscribe(data => {
            this.createImageFromBlob(data);
            this.isImageLoading = false;
          }, error => {
            this.isImageLoading = false;
            console.log(error);
          });

        }
      }, err => {
        this.NewCarsdata = err;
      }
      );
    });
  }
  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      this.NewCarsImageToShow.push(reader.result);
    }, false);
    if (image) {
      reader.readAsDataURL(image);
    }
    this.NewCarsArrayOfImages = this.NewCarsImageToShow;
  }
  ngOnInit(): void {
    this.getNewCars();
  }
}
