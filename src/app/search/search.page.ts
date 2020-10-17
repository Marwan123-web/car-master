import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { Platform } from '@ionic/angular';
import { TranslateConfigService } from '../services/translate-config.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { AlertService } from '../services/alert.service';
import { User, Role } from '../_models';
import { AppServicesService } from '../services/app-services.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: 'search.page.html',
  styleUrls: ['search.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class searchPage implements OnInit {
  kilorangeVal: string
  selectedLanguage: any;
  customPickerOptions: any;
  validations_form: FormGroup;
  searched: any;
  currentUser: User;
  yearsrangeVal: string;
  sub: any;
  constructor(public platform: Platform, private formBuilder: FormBuilder, private authservice: AuthService, private appservices: AppServicesService, private router: Router, private translateConfigService: TranslateConfigService, private route: ActivatedRoute, private alertservice: AlertService, private _Activatedroute: ActivatedRoute,


  ) {
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
    this.platform.ready().then(() => {
      this.kilorangeVal = "150000";
    })
    this.platform.ready().then(() => {
      this.yearsrangeVal = "2000";
    })
    if (this.authservice.currentUserValue) {
      this.currentUser = this.authservice.currentUserValue;
    }
  }


  //  customAlertOptions: any = {
  //   header: 'Search By Category',
  //   translucent: true    
  // };


  bodyArray: any = ["Compact", "Convertible", "Coupe", "Off-Road/Pick-up", "Sedans", "Station wagon", "Transporter", "Van", "Other"];
  body: any;
  onSelectChangebody(event: any) {
    this.body = event.target.value;
    // console.log(this.body)
  }

  VehicleConditionArray: any = ["New", "Used", "Employee's Car", "Antique / Classic", "Demonstration", "Pre-registered"];
  VehicleCondition: any;
  onSelectChangeVehicleCondition(event: any) {
    this.VehicleCondition = event.target.value;
  }

  // searchfun(carName, BODY, yearsrangeVal, CONDITION, kilorangeVal) {
  //   // this.appservices.searchForCars(carName,BODY ,yearsrangeVal,CONDITION,kilorangeVal).subscribe(res => {
  //   //   this.searched = res;
  //   // }, err => {
  //   //   this.searched = err;
  //   // });
  //   // this.sub = this._Activatedroute.paramMap.subscribe(params => {
  //   //   this.carId = params.get('carid');
  //   // });
  // }
  ngOnInit(): void {
    this.validations_form = this.formBuilder.group({
      carBrand: new FormControl('', Validators.required),

    });
    
    this.sub = this._Activatedroute.paramMap.subscribe(params => {
    });
  }
}