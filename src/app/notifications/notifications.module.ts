import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { notifications } from './notifications.page';

import { notificationsRoutingModule } from './notifications-routing.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    IonicModule,
    TranslateModule.forChild(),
    CommonModule,
    FormsModule,
    notificationsRoutingModule
  ],
  declarations: [notifications]
})
export class notificationsPageModule {}
