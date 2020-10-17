import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { morePage } from './more.page';

const routes: Routes = [
  {
    path: '',
    component: morePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class morePageRoutingModule {}
