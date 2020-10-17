import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { contactUsPage } from './contact-us.page';

const routes: Routes = [
  {
    path: '',
    component: contactUsPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class contactUsPageRoutingModule {}
