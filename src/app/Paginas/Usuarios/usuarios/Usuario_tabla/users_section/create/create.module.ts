import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreatePageRoutingModule } from './create-routing.module';

import { CreatePage } from './create.page';
import { MyComponentsModule } from "../../../../../../Components/my-components/my-components.module";

@NgModule({
    declarations: [CreatePage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CreatePageRoutingModule,
        MyComponentsModule
    ]
})
export class CreatePageModule {}
