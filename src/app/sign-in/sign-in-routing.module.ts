import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { signInPage } from './sign-in.page';

const routes: Routes = [
  {
    path: '',
    component: signInPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class signInPageRoutingModule {}
