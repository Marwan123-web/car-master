import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { newCarsPage } from './new-cars.page';

import { newCarsPageRoutingModule } from './new-cars-routing.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    IonicModule,
    TranslateModule.forChild(),
    CommonModule,
    FormsModule,
    newCarsPageRoutingModule
  ],
  declarations: [newCarsPage]
})
export class newCarsPageModule {}
