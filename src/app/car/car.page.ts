import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { AppServicesService } from '../services/app-services.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateConfigService } from '../services/translate-config.service';
import { AuthService } from '../services/auth.service';
import { AlertService } from '../services/alert.service';
import { User, Role } from '../_models';
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
    autoplay: true,
  }
  increamented: any;
  currentUser: User;
  changeto: string;
  changed: any;
  deleted: any;
  constructor(private authservice: AuthService, private appservices: AppServicesService, private router: Router, private translateConfigService: TranslateConfigService, private route: ActivatedRoute, private alertservice: AlertService, private _Activatedroute: ActivatedRoute,


  ) {
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
    if (this.authservice.currentUserValue) {
      this.currentUser = this.authservice.currentUserValue;
    }
  }
  get isAdmin() {
    return this.currentUser && this.currentUser.role === Role.Normal;
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
      this.alertservice.showAlert("&#xE876;", "success", res.msg);
    }, err => {
      this.alertservice.showAlert("&#xE5CD;", "error", err.error.msg);
    });
  }

  ngOnInit(): void {
    this.getcar();
  }
}
