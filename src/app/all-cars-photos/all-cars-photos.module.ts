import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllCarsPhotosPageRoutingModule } from './all-cars-photos-routing.module';

import { AllCarsPhotosPage } from './all-cars-photos.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule.forChild(),
    IonicModule,
    AllCarsPhotosPageRoutingModule
  ],
  declarations: [AllCarsPhotosPage]
})
export class AllCarsPhotosPageModule {}
