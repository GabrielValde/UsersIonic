import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersSectionPage } from './users-section.page';

const routes: Routes = [
  {
    path: '',
    component: UsersSectionPage,
    children:[
      {
        path: 'edit/:id',
        loadChildren: () => import('./edit/edit.module').then( m => m.EditPageModule)
      },
      {
        path: 'create',
        loadChildren: () => import("../users_section/create/create.module").then( m => m.CreatePageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersSectionPageRoutingModule {}
