import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { notifications } from './notifications.page';

const routes: Routes = [
  {
    path: '',
    component: notifications,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class notificationsRoutingModule {}
