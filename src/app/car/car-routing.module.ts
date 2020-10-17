import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { carPage } from './car.page';

const routes: Routes = [
  {
    path: '',
    component: carPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class carPageRoutingModule {}
