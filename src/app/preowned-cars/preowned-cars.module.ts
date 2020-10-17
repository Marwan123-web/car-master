import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { preownedCarsPage } from './preowned-cars.page';

import { preownedCarsPageRoutingModule } from './preowned-cars-routing.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    IonicModule,
    TranslateModule.forChild(),
    CommonModule,
    FormsModule,
    preownedCarsPageRoutingModule
  ],
  declarations: [preownedCarsPage]
})
export class preownedCarsPageModule {}
