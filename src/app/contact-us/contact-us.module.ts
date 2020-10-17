import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { contactUsPage } from './contact-us.page';

import { contactUsPageRoutingModule } from './contact-us-routing.module'
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    IonicModule,
    TranslateModule.forChild(),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: '', component: contactUsPage }]),
    contactUsPageRoutingModule,
  ],
  declarations: [contactUsPage]
})
export class contactUsPageModule {}
