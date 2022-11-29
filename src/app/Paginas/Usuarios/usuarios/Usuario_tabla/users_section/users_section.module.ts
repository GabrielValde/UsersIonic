import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsersSectionPageRoutingModule } from './users-section-routing.module';

import { UsersSectionPage } from './users-section.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsersSectionPageRoutingModule
  ],
  declarations: [UsersSectionPage]
})
export class UsersSectionPageModule {}
