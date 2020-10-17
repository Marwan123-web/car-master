import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { signInPage } from './sign-in.page';

import { signInPageRoutingModule } from './sign-in-routing.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    IonicModule,
    TranslateModule.forChild(),
    CommonModule,
    FormsModule,
    signInPageRoutingModule,
    ReactiveFormsModule,

  ],
  declarations: [signInPage]
})
export class signInPageModule {}
