import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditPageRoutingModule } from './edit-routing.module';

import { EditPage } from './edit.page';
import { MyComponentsModule } from "../../../../../../Components/my-components/my-components.module";

@NgModule({
    declarations: [EditPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        EditPageRoutingModule,
        MyComponentsModule
    ]
})
export class EditPageModule {}
