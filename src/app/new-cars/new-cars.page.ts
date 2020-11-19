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
  url: any = "https://cairo-belguim.herokuapp.com";
  // url: any = "http://192.168.1.7:3000";
  constructor(private authservice: AuthService, private appservices: AppServicesService, private router: Router, private translateConfigService: TranslateConfigService, private route: ActivatedRoute, private alertservice: AlertService, private _Activatedroute: ActivatedRoute,
  ) {
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
    if (this.authservice.currentUserValue) {
      this.currentUser = this.authservice.currentUserValue;
    }
  }
  doRefresh(event) {
    setTimeout(() => {
      this.ngOnInit();
      event.target.complete();
    }, 1500);
  }
  getNewCars() {
    this.sub = this._Activatedroute.paramMap.subscribe(params => {
      this.appservices.getNewCars().subscribe(res => {
        this.NewCarsdata = res;
      }, err => {
        this.NewCarsdata = err;
      }
      );
    });
  }
  ngOnInit(): void {
    this.getNewCars();
  }
}
