import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { AuthGuard } from '../_guards';
import { Role } from '../_models';
const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/tabs',
  //   pathMatch: 'full',
  // },
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () => import('../home/home.module').then(m => m.homePageModule)
          },
          {
            path: 'new-cars',
            children: [
              {
                path: '',
                loadChildren: () => import('../new-cars/new-cars.module').then(m => m.newCarsPageModule)
              },
              {
                path: 'car/:carid',
                loadChildren: () => import('../car/car.module').then(m => m.carPageModule)
              },
            ],
          },
          {
            path: 'preowned-cars',
            children: [
              {
                path: '',
                loadChildren: () => import('../preowned-cars/preowned-cars.module').then(m => m.preownedCarsPageModule)
              },
              {
                path: 'car/:carid',
                loadChildren: () => import('../car/car.module').then(m => m.carPageModule)
              },
            ],

          },
          {
            path: 'all-cars-photos',
            loadChildren: () => import('../all-cars-photos/all-cars-photos.module').then(m => m.AllCarsPhotosPageModule)
          },
          {
            path: 'reviews',
            children: [
              {
                path: '',
                loadChildren: () => import('../reviews/reviews.module').then(m => m.reviewsPageModule)
              },
              {
                path: 'car/:carid',
                loadChildren: () => import('../car/car.module').then(m => m.carPageModule)
              },
            ],

          },
          {
            path: 'car/:carid',
            loadChildren: () => import('../car/car.module').then(m => m.carPageModule)
          },
        ],
      },
      {
        path: 'search',
        children: [
          {
            path: '',
            loadChildren: () => import('../search/search.module').then(m => m.searchPageModule)
          },
          {
            path: 'cars/:carBrand/:BODY/:yearsrangeVal/:CONDITION/:kilorangeVal',
            loadChildren: () => import('../cars/cars.module').then(m => m.CarsPageModule)
          },
          {
            path: 'car/:carid',
            loadChildren: () => import('../car/car.module').then(m => m.carPageModule)
          },
        ],
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: () => import('../profile/profile.module').then(m => m.profilePageModule)
          },
          {
            path: 'settings',
            children: [
              {
                path: '',
                loadChildren: () => import('../settings/settings.module').then(m => m.settingsPageModule),
                canActivate: [AuthGuard],
              },
              {
                path: 'change-email',
                loadChildren: () => import('../change-email/change-email.module').then(m => m.changeEmailPageModule),
                canActivate: [AuthGuard],
              },
              {
                path: 'change-password',
                loadChildren: () => import('../change-password/change-password.module').then(m => m.changePasswordPageModule),
                canActivate: [AuthGuard],
              },
            ],
          },
          {
            path: 'favourites',
            children: [
              {
                path: '',
                loadChildren: () => import('../favourites/favourites.module').then(m => m.FavouritesPageModule),
                canActivate: [AuthGuard],
              },
              {
                path: 'car/:carid',
                loadChildren: () => import('../car/car.module').then(m => m.carPageModule)
              },
            ],
          },
        ],
      },
      {
        path: 'more',
        children: [
          {
            path: '',
            loadChildren: () => import('../more/more.module').then(m => m.morePageModule)
          },

          {
            path: 'contact-us',
            loadChildren: () => import('../contact-us/contact-us.module').then(m => m.contactUsPageModule)
          },
        ],
      },
      {
        path: 'add-car',
        loadChildren: () => import('../add-car/add-car.module').then(m => m.addCarPageModule),
        canActivate: [AuthGuard],
        data: { roles: [Role.Admin] }
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
