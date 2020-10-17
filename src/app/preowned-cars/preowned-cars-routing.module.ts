import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { preownedCarsPage } from './preowned-cars.page';

const routes: Routes = [
  {
    path: '',
    component: preownedCarsPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class preownedCarsPageRoutingModule {}
