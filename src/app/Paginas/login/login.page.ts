import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/Servicio/Usuarios/usuarios.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user:string="";
  contrase:string="";
//https://github.com/JosueDonis/crud-ionic-angular
  Logear(Usuario:any,Clave:any){
    this.UsuarioSer.Login(Usuario.value,Clave.value).subscribe(
    f => {
      if (f?.id){
        localStorage.setItem("User_id",f.id);
        localStorage.setItem("User_name",f.name);
        setTimeout(() => {
        this.Rout.navigate([`/usuarios/users-section`],{
          queryParams:{"page":1}
        })  
        }, 500); 
        
      }else{
        alert("Usuario o contraseña incorrecta")
      }
    }
    )
  }
  constructor(private UsuarioSer:UsuariosService,private Rout:Router) { }

  ngOnInit() {
        
  }

}
/*{
  "username": "william.chanchavac@hotmail.com",
  "password": "123456"
}*/
