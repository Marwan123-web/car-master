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
  constructor(private authservice: AuthService, private appservices: AppServicesService, private router: Router, private translateConfigService: TranslateConfigService, private route: ActivatedRoute, private alertservice: AlertService, private _Activatedroute: ActivatedRoute,
    ) {
      this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
      if (this.authservice.currentUserValue) {
        this.currentUser = this.authservice.currentUserValue;
      }
    }

    getUsedCars() {
      this.sub = this._Activatedroute.paramMap.subscribe(params => {
        this.appservices.getUsedCars().subscribe(res => {
          this.UsedCarsdata = res;
        }, err => {
          this.UsedCarsdata = err;
        }
        );
      });
    }
    ngOnInit(): void {
      this.getUsedCars();
    }
}
