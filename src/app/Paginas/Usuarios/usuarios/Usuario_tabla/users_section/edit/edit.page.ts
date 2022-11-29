import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/Interfaces/UserInterfas';
import { UsuariosService } from 'src/app/Servicio/Usuarios/usuarios.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  constructor(private Servicio:UsuariosService) { }
  Editar(Datos:Usuario){
    this.Servicio.Mensaje("Enviando datos, espere porfavor",5000,"top");
    this.Servicio.Update_User(Datos).subscribe();
  }
  ngOnInit() {
   
  }

}
