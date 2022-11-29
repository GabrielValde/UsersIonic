import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/Interfaces/UserInterfas';
import { UsuariosService } from 'src/app/Servicio/Usuarios/usuarios.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  constructor(private Servicio:UsuariosService) { }
  Enviar(Datos:Usuario){
    this.Servicio.Mensaje("Enviando datos, espere porfavor",5000,"top");
    let Recibido:any=Datos;
    delete Recibido["id"];
    
    this.Servicio.Post_user(Recibido).subscribe();
  }
  ngOnInit() {
  }

}
