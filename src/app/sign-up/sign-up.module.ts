import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { signUpPage } from './sign-up.page';

import { signUpPageRoutingModule } from './sign-up-routing.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    IonicModule,
    TranslateModule.forChild(),
    CommonModule,
    FormsModule,
    signUpPageRoutingModule,
    ReactiveFormsModule,

  ],
  declarations: [signUpPage]
})
export class signUpPageModule {}
