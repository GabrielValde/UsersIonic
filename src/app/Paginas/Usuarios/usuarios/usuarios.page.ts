import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { UsuariosService } from 'src/app/Servicio/Usuarios/usuarios.service';
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {
  Usuario:any="";
  Cerrar_sesion(){
    localStorage.clear()
    setTimeout(() => {
      this.rout.navigate([""])  
    }, 1000);
   
  }
  constructor(private rout:Router,private Servicio:UsuariosService) { }
  appPages=[
    {url:"/usuarios/users-section",icon:"people-circle",title:"Usuarios"}
  ]
  ngOnInit() {
  }

}
