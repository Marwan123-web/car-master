import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllCarsPhotosPage } from './all-cars-photos.page';

const routes: Routes = [
  {
    path: '',
    component: AllCarsPhotosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllCarsPhotosPageRoutingModule {}
