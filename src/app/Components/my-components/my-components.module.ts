import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormuComponent} from '../formu/formu.component'
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FormuComponent],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
  ],
  exports:[FormuComponent]
})
export class MyComponentsModule { }
