import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { settingsPage } from './settings.page';

import { settingsPageRoutingModule } from './settings-routing.module';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  imports: [
    IonicModule,
    TranslateModule.forChild(),
    CommonModule,
    FormsModule,
    settingsPageRoutingModule
  ],
  declarations: [settingsPage]
})
export class settingsPageModule { }
