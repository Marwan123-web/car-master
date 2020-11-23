import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { AppServicesService } from '../services/app-services.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateConfigService } from '../services/translate-config.service';
import { AuthService } from '../services/auth.service';
import { User } from '../_models';
import { AlertService } from '../services/alert.service';
import { ModalController } from '@ionic/angular';
import { ViewerModalComponent } from 'ngx-ionic-image-viewer';
@Component({
  selector: 'app-all-cars-photos',
  templateUrl: './all-cars-photos.page.html',
  styleUrls: ['./all-cars-photos.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AllCarsPhotosPage implements OnInit {
  selectedLanguage: string;
  currentUser: User;
  sub: any;
  AllCarsImagesPath: any;
  isDisplayImage: boolean = false;
  imageToShow: Array<any> = [];
  url: any = "https://cairo-belguim.herokuapp.com";
  // url: any = "http://192.168.1.7:3000";
  constructor(private authservice: AuthService, public modalController: ModalController, private appservices: AppServicesService, private router: Router, private translateConfigService: TranslateConfigService, private route: ActivatedRoute, private alertservice: AlertService, private _Activatedroute: ActivatedRoute,
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
        src: this.url+"/image/"+imageurl
      },
      cssClass: 'ion-img-viewer',
      keyboardClose: true,
      showBackdrop: true,
      swipeToClose:true,
    });

    return await modal.present();
  }
  getAllCarsImages() {
    this.sub = this._Activatedroute.paramMap.subscribe(params => {
      this.appservices.getAllCarImages().subscribe(res => {
        this.AllCarsImagesPath = res;
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

