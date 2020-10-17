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
  constructor(private authservice: AuthService, private appservices: AppServicesService, private router: Router, private translateConfigService: TranslateConfigService, private route: ActivatedRoute, private alertservice: AlertService, private _Activatedroute: ActivatedRoute,
    ) {
      this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
      if (this.authservice.currentUserValue) {
        this.currentUser = this.authservice.currentUserValue;
      }
    }

    getAllMostViewsCars() {
      this.sub = this._Activatedroute.paramMap.subscribe(params => {
        this.appservices.AllMostViewsCars().subscribe(res => {
          this.AllMostViewsCarsdata = res;
          // console.log(res)
        }, err => {
          this.AllMostViewsCarsdata = err;
        }
        );
      });
    }
    ngOnInit(): void {
      this.getAllMostViewsCars();

    }
}
