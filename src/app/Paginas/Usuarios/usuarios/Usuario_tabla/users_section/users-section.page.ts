import { Component, OnInit } from '@angular/core';
import { Peticion, Usuario } from 'src/app/Interfaces/UserInterfas';
import { UsuariosService } from 'src/app/Servicio/Usuarios/usuarios.service';
import { ActivatedRoute,Router } from '@angular/router';
import { range } from 'rxjs';
import { Console } from 'console';

@Component({
  selector: 'app-users-section',
  templateUrl: './users-section.page.html',
  styleUrls: ['./users-section.page.scss'],
})
export class UsersSectionPage implements OnInit {
  Cantidad?:number[]
  Personas?:Usuario[]
  Cant_siguiente?:number;
  Cant_atras?:number;

  
  constructor(private Servicio:UsuariosService,private rot:ActivatedRoute,private router:Router) { }

  Rango(inicio:number,fin:number):number[]{
    var final:number[]=[]
    for (let index = inicio; index <= fin; index++) {
      final.push(index);
    }
    return final
  }

  Borrar(id:string,Nombre:string){
    this.Servicio.Alert(`Desea eliminar a ${Nombre}`,
      ()=> {},
      ()=> {this.Personas= this.Personas?.filter(user=> user.id!=id);
        this.Servicio.delete_user(id).subscribe();}
        )
    
  }
  ngOnInit() {
    this.rot.queryParams.subscribe( clave => {
      if(clave["page"]!==undefined){
      this.Servicio.Get_users(clave["page"]).subscribe(
      (data:Peticion) => {
        this.Personas= data.rows
        var cant:number=4/2;
        var inicio:number=clave["page"]-cant
        
        var fin:number=Number(clave["page"])+ Number(cant);
        if (inicio<1){
          inicio=1;
          fin= inicio+cant*2;
        }
        if (fin>data.pages){
          fin= data.pages;
          inicio= fin-cant*2;
        }
        this.Cantidad= this.Rango(inicio,fin)
        this.Cant_siguiente= Number(clave["page"])+1;
        if (this.Cant_siguiente>data.pages){
          this.Cant_siguiente=-1;
        }
        this.Cant_atras= Number(clave["page"])-1;
        if (this.Cant_atras<=0){
          this.Cant_atras=-1;
        }
      }
    )
    }
  }
    )

    
  }

}
