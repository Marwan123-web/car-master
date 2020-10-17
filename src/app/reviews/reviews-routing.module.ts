import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { reviews } from './reviews.page';

const routes: Routes = [
  {
    path: '',
    component: reviews,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class reviewsRoutingModule {}
