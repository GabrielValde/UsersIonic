import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/Interfaces/UserInterfas';
import { UsuariosService } from 'src/app/Servicio/Usuarios/usuarios.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-formu',
  templateUrl: './formu.component.html',
  styleUrls: ['./formu.component.scss'],
})
export class FormuComponent implements OnInit {

  Formulario:FormGroup=this.formu.group(
    {
      id:[""],
      name:["",Validators.required],
      birthday:["",Validators.required],
      email:["",[Validators.required,Validators.email,Validators.pattern(/^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/)]],
      image:["",[Validators.required]],
      password:["",[Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$&@])[A-Za-z\d#$&@]/)]]
    }
  );
  
  @Output() Enviar= new EventEmitter();
  
  Enviar_info(){
    if (this.Formulario.valid){
      let Informacion:Usuario= this.Formulario.value as Usuario;
      this.Enviar.emit(Informacion);
      this.Formulario.reset();
    }else{
      Object.keys(this.Formulario.controls).forEach(
        llave => this.Verificar(llave,llave)
      )
    }
    //this.Enviar.emit(this.Formulario.value)
  }

  Verificar(Entrada:string,Elemento:string){
    if(this.Formulario.get(Entrada)?.errors?.["required"] ){
      this.Servicio.Mensaje(`Es necesario que llene el campo "${Elemento}"`,3000,"top")
    }
    if(this.Formulario.get(Entrada)?.errors?.["email"] && this.Formulario.get(Entrada)?.errors?.["pattern"] ){
      this.Servicio.Mensaje(`Ingrese un correo en el campo "${Elemento}"`,3000,"top")
    }
    if (this.Formulario.get(Entrada)?.errors?.["pattern"]){
      this.Servicio.Mensaje(`El valor del campo "${Elemento} es invalido"`,3000,"top")
      if (Entrada=="clave"){
        this.Servicio.Mensaje("La contraseña debe contener al menos 6 caracteres, una mayuscula, 1 caracter especial (#$&@) y un numero",5000,"top")
      }
    }
    
  }
  constructor(private formu:FormBuilder, private Servicio:UsuariosService, private rout:ActivatedRoute) { }

  ngOnInit() {
    this.rout.params.subscribe(
      x=> {
        if (x["id"]!=undefined){
          this.Servicio.Get_User(x["id"]).subscribe(
            (data:Usuario) => this.Formulario.patchValue(
              {
                id:data.id,
                name:data.name,
                birthday:new Date(data.birthday) ,
                email:data.email,
                image:data.image 
              }
            )
          )
        }

      }
    )  
  }
}
