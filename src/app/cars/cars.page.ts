import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { AppServicesService } from '../services/app-services.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateConfigService } from '../services/translate-config.service';
import { AuthService } from '../services/auth.service';
import { User } from '../_models';
import { AlertService } from '../services/alert.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.page.html',
  styleUrls: ['./cars.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CarsPage implements OnInit {
  selectedLanguage: string;
  currentUser: User;
  sub: any;
  SearchedCars: any;
  lessthanyear: string;
  carBrand: string;
  bodyType: string;
  carCondition: string;
  lessthankm: string;
  searched: any;
  constructor(private authservice: AuthService, private appservices: AppServicesService, private router: Router, private translateConfigService: TranslateConfigService, private route: ActivatedRoute, private alertservice: AlertService, private _Activatedroute: ActivatedRoute,
  ) {
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
    if (this.authservice.currentUserValue) {
      this.currentUser = this.authservice.currentUserValue;
    }
  }
  getSearchedCars() {
    this.sub = this._Activatedroute.paramMap.subscribe(params => {
      this.carBrand = params.get('carBrand');
      this.bodyType = params.get('BODY');
      this.lessthanyear = params.get('yearsrangeVal');
      this.carCondition = params.get('CONDITION');
      this.lessthankm = params.get('kilorangeVal');
      this.appservices.searchForCars(this.carBrand, this.bodyType, this.lessthanyear, this.carCondition, this.lessthankm).subscribe(res => {
        this.searched = res;
        console.log(res);
      }, err => {
        this.searched = err;
      });
    });
  }
  ngOnInit(): void {
    this.getSearchedCars();
  }
}