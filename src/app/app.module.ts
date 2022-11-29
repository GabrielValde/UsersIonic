import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import {HttpClientModule} from "@angular/common/http"
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MyComponentsModule } from './Components/my-components/my-components.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UsuariosService } from './Servicio/Usuarios/usuarios.service';
@NgModule({
  declarations: [AppComponent],
  imports: [MyComponentsModule,BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule,FormsModule,ReactiveFormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent,UsuariosService],
})
export class AppModule {}
