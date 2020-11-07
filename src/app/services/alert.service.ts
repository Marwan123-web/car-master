import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { User } from '../_models';
import { ActivatedRoute, Router } from '@angular/router';
import { AppServicesService } from '../services/app-services.service';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  currentUser: User;
  myFavourites: any;
  carId: any;

  constructor(public alertController: AlertController, public router: Router, private appservices: AppServicesService, private _Activatedroute: ActivatedRoute, private authservice: AuthService,) {
    if (this.authservice.currentUserValue) {
      this.currentUser = this.authservice.currentUserValue;
    }
  }

  async showAlert(icon: string, style: string, msg: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      message: `<div class="icon-box ${style}"><i class="material-icons">${icon}</i></div>` + msg,
      buttons: ['OK']
    });

    await alert.present();
  }

  async showAlert2(icon: string, style: string, msg: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      message: `<div class="icon-box ${style}"><i class="material-icons">${icon}</i></div>` + msg,
      buttons: [
        {
          text: 'Okay',
          handler: () => {
            location.reload();
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentAlertMultipleButtons() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['Cancel', 'Open Modal', 'Delete']
    });

    await alert.present();
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: 'Message <strong>text</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Prompt!',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: 'Placeholder 1'
        },
        {
          name: 'name2',
          type: 'text',
          id: 'name2-id',
          value: 'hello',
          placeholder: 'Placeholder 2'
        },
        // multiline input.
        {
          name: 'paragraph',
          id: 'paragraph',
          type: 'textarea',
          placeholder: 'Placeholder 3'
        },
        {
          name: 'name3',
          value: 'http://ionicframework.com',
          type: 'url',
          placeholder: 'Favorite site ever'
        },
        // input date with min & max
        {
          name: 'name4',
          type: 'date',
          min: '2017-03-01',
          max: '2018-01-12'
        },
        // input date without min nor max
        {
          name: 'name5',
          type: 'date'
        },
        {
          name: 'name6',
          type: 'number',
          min: -5,
          max: 10
        },
        {
          name: 'name7',
          type: 'number'
        },
        {
          name: 'name8',
          type: 'password',
          placeholder: 'Advanced Attributes',
          // cssClass: 'specialClass',
          // attributes: {
          //   maxlength: 4,
          //   inputmode: 'decimal'
          // }
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlertRadio() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Radio',
      inputs: [
        {
          name: 'radio1',
          type: 'radio',
          label: 'Radio 1',
          value: 'value1',
          checked: true
        },
        {
          name: 'radio2',
          type: 'radio',
          label: 'Radio 2',
          value: 'value2'
        },
        {
          name: 'radio3',
          type: 'radio',
          label: 'Radio 3',
          value: 'value3'
        },
        {
          name: 'radio4',
          type: 'radio',
          label: 'Radio 4',
          value: 'value4'
        },
        {
          name: 'radio5',
          type: 'radio',
          label: 'Radio 5',
          value: 'value5'
        },
        {
          name: 'radio6',
          type: 'radio',
          label: 'Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 ',
          value: 'value6'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlertCheckbox() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Checkbox',
      inputs: [
        {
          name: 'checkbox1',
          type: 'checkbox',
          label: 'Checkbox 1',
          value: 'value1',
          checked: true
        },

        {
          name: 'checkbox2',
          type: 'checkbox',
          label: 'Checkbox 2',
          value: 'value2'
        },

        {
          name: 'checkbox3',
          type: 'checkbox',
          label: 'Checkbox 3',
          value: 'value3'
        },

        {
          name: 'checkbox4',
          type: 'checkbox',
          label: 'Checkbox 4',
          value: 'value4'
        },

        {
          name: 'checkbox5',
          type: 'checkbox',
          label: 'Checkbox 5',
          value: 'value5'
        },

        {
          name: 'checkbox6',
          type: 'checkbox',
          label: 'Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6',
          value: 'value6'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }



  navigateToCar(id) {
    this.router.navigate(['/tabs/car', id]);
  }
  deleteCarFromMyFavourites(id) {
    this.appservices.deleteFromFavourites(this.currentUser._id, id).subscribe(res => {
      this.myFavourites = res;
    }, err => {
      this.myFavourites = err;
    }
    );
  }

  async deleteOrviewpresentAlertConfirm(id): Promise<any> {
    this.carId = id;
    return new Promise(async (resolve) => {
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Choose One!',
        message: 'What Do You Need From This Car',
        buttons: [
          {
            text: 'View Car',
            handler: () => {
              // console.log('Confirm Okay');
              this.navigateToCar(this.carId);
            }
          },
          {
            text: 'Delete Car',
            // cssClass: 'secondary',
            handler: (Ok) => {
              // console.log('Confirm Cancel: blah');
              this.deleteCarFromMyFavourites(this.carId);
              resolve('ok');
            }
          },
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              // console.log('Confirm Cancel: blah');
            }
          }
        ]
      });
      await alert.present();
    });
  }



}