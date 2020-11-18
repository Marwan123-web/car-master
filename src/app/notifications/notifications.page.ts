import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { AppServicesService } from '../services/app-services.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateConfigService } from '../services/translate-config.service';
import { AuthService } from '../services/auth.service';
import { User } from '../_models';
import { AlertService } from '../services/alert.service';
// import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
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
  isDisplayImage: boolean = false;
  isImageLoading2: boolean;
  imageToShow: Array<any> = [];
  imageToShow2: Array<any> = [];

  constructor(private authservice: AuthService, private appservices: AppServicesService, private router: Router, private translateConfigService: TranslateConfigService, private route: ActivatedRoute, private alertservice: AlertService, private _Activatedroute: ActivatedRoute,
  ) {
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
    if (this.authservice.currentUserValue) {
      this.currentUser = this.authservice.currentUserValue;
    }
  }
  // emptycarimageToShow() {
  //   //empty your array
  //   this.imageToShow.length = 0;
  // }
  // createImageFromBlobOnePic(image: Blob) {
  //   let reader = new FileReader();
  //   reader.addEventListener("load", () => {
  //     this.imageToShow.push(reader.result);
  //   }, false);
  //   if (image) {
  //     reader.readAsDataURL(image);
  //   }
  //   this.imageToShow2 = this.imageToShow;
  // }
  // displayImage(imageurl) {
  //   if (this.isDisplayImage == false) {
  //     this.appservices.getCarImages(imageurl).subscribe(data => {
  //       this.createImageFromBlobOnePic(data);
  //       this.isImageLoading2 = false;
  //     }, error => {
  //       this.isImageLoading2 = false;
  //       console.log(error);
  //     });
  //     this.isDisplayImage = true;
  //   }
  //   else if (this.isDisplayImage == true) {
  //     this.isDisplayImage = false;
  //     this.emptycarimageToShow();
  //   }
  // }
  emptyAllcarsimageToShow() {
    //empty your array
    this.AllCarsImageToShow.length = 0;
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
  getAllCarsImages() {
    this.sub = this._Activatedroute.paramMap.subscribe(params => {
      this.emptyAllcarsimageToShow();
      // this.emptycarimageToShow();
      this.appservices.getAllCarImages().subscribe(res => {
        this.AllCarsImagesPath = res;
        for (let i = 0; i < this.AllCarsImagesPath.length; i++) {
          this.isImageLoading = true;
          this.appservices.getCarImages(this.AllCarsImagesPath[i].name).subscribe((data) => {
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

  ngOnInit(): void {
    this.getAllCarsImages();
  }
}
