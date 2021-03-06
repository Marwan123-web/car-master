import { Component, OnInit, ViewEncapsulation, ViewChild, NgModule } from '@angular/core';
import { AppServicesService } from '../services/app-services.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateConfigService } from '../services/translate-config.service';
import { AuthService } from '../services/auth.service';
import { AlertService } from '../services/alert.service';
import { User, Role } from '../_models';
import { DomSanitizer } from '@angular/platform-browser';
import { ModalController } from '@ionic/angular';
import { ViewerModalComponent } from 'ngx-ionic-image-viewer';
@Component({
  selector: 'app-car',
  templateUrl: 'car.page.html',
  styleUrls: ['car.page.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class carPage implements OnInit {
  selectedLanguage: string;
  hideState = false;
  hidePerformance = false;
  hideEnvironment = false;
  hideProperties = false;
  hideEquipment = false;
  sub: any;
  carId: string;
  cardata: any;
  slideOpts: any = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: {
      disableOnInteraction: false
    }
  }
  increamented: any;
  currentUser: User;
  changeto: string;
  changed: any;
  deleted: any;
  image: any;
  liked: boolean;
  Notliked: boolean;
  openOrClose: boolean;
  showMore: boolean = false;
  url: any = "https://cairo-belguim.herokuapp.com";
  // url: any = "http://192.168.1.7:3000";
  constructor(private authservice: AuthService, private appservices: AppServicesService, private router: Router, private translateConfigService: TranslateConfigService, private route: ActivatedRoute, private alertservice: AlertService, private _Activatedroute: ActivatedRoute,
    private sanitizer: DomSanitizer,
    public modalController: ModalController

  ) {
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
    if (this.authservice.currentUserValue) {
      this.currentUser = this.authservice.currentUserValue;
    }
  }
  async openViewer(imageurl) {
    const modal = await this.modalController.create({
      component: ViewerModalComponent,
      componentProps: {
        src: this.url + "/image/" + imageurl,
      },
      cssClass: 'ion-img-viewer',
      keyboardClose: true,
      showBackdrop: true,
      swipeToClose: true,
    });

    return await modal.present();
  }
  get isAdmin() {
    return this.currentUser && this.currentUser.role === Role.Admin;
  }
  hide(divID) {
    if (divID == "state") {
      //Hide State
      if (this.hideState == false)
        this.hideState = true;
      else if (this.hideState == true) {
        this.hideState = false;
      }
    }
    else if (divID == "performance") {
      //Hide Performance
      if (this.hidePerformance == false)
        this.hidePerformance = true;
      else if (this.hidePerformance == true) {
        this.hidePerformance = false;
      }
    }
    else if (divID == "environment") {
      //Hide Environment
      if (this.hideEnvironment == false)
        this.hideEnvironment = true;
      else if (this.hideEnvironment == true) {
        this.hideEnvironment = false;
      }
    }
    else if (divID == "properties") {
      //Hide Properties
      if (this.hideProperties == false)
        this.hideProperties = true;
      else if (this.hideProperties == true) {
        this.hideProperties = false;
      }
    }
    else if (divID == "equipment") {
      //Hide Equipment
      if (this.hideEquipment == false)
        this.hideEquipment = true;
      else if (this.hideEquipment == true) {
        this.hideEquipment = false;
      }
    }

  }
  trimString(text, length) {
    return text.length > length ?
      text.substring(0, length) + '...' :
      text;
  }
  changeCarStatusfun(status) {
    this.sub = this._Activatedroute.paramMap.subscribe(params => {
      this.carId = params.get('carid');
      if (status == "Yes") {
        this.changeto = "No"
        this.changeCarStatus(this.carId, this.changeto);
      }
      else if (status == "No") {
        this.changeto = "Yes"
        this.changeCarStatus(this.carId, this.changeto);
      }
    });
  }
  checkFavourtiesFun() {
    this.sub = this._Activatedroute.paramMap.subscribe(params => {
      this.carId = params.get('carid');
      this.appservices.checkFavourties(this.currentUser._id, this.carId).subscribe(res => {
        if (res === true) {
          this.liked = true;
          this.Notliked = false;
        }
        else if (res === false) {
          this.liked = false;
          this.Notliked = true;
        }
      }, err => {
        this.changed = err;
      });
    });

  }
  changeCarStatus(id, status) {
    this.appservices.changeCarStatus(id, status).subscribe(res => {
      this.changed = res;
      this.getcar();
    }, err => {
      this.changed = err;
    });
  }
  getcar() {
    this.sub = this._Activatedroute.paramMap.subscribe(params => {
      this.carId = params.get('carid');
      this.appservices.getCarById(this.carId).subscribe(res => {
        this.cardata = res;
        if (this.cardata.Reserved == "Yes") {
          this.openOrClose = true;
        }
        else if (this.cardata.Reserved == "No") {
          this.openOrClose = false;
        }
        this.appservices.increamentViews(this.carId).subscribe(res => {
          this.increamented = res;
        }, err => {
          this.increamented = err;
        });
      }, err => {
        this.cardata = err;
      });
    });
  }
  navigateToHome() {
    this.router.navigate(['/tabs/home']);
  }
  deleteCarFunction(id) {
    this.appservices.deleteCar(id).subscribe(res => {
      this.navigateToHome();
      this.deleted = res
    }, err => {
      this.deleted = err;
    });
  }

  addToFavouritesFunction(CarId) {
    this.appservices.addToFavourites(this.currentUser._id, CarId).subscribe(res => {
      this.checkFavourtiesFun();
      this.alertservice.showAlert("&#xE876;", "success", res.msg);
    }, err => {
      this.alertservice.showAlert("&#xE5CD;", "error", err.error.msg);
    });
  }
  deleteCarFromMyFavourites(id) {
    this.appservices.deleteFromFavourites(this.currentUser._id, id).subscribe(res => {
      this.checkFavourtiesFun();
      this.alertservice.showAlert("&#xE876;", "success", res.msg);
    }, err => {
      this.alertservice.showAlert("&#xE5CD;", "error", err.error.msg);
    }
    );
  }
  ngOnInit(): void {
    this.getcar();
    if (this.currentUser) {
      this.checkFavourtiesFun();
    }

  }
}
