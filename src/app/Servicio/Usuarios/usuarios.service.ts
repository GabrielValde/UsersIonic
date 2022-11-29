import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Usuario,Peticion} from '../../Interfaces/UserInterfas'
import { Observable,of } from 'rxjs';
import { catchError,tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { Location } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  async Alert(Mensa:string,cancelar:any,Confirmar:any){
    const alert= await this.Alerta.create(
      {
        header:Mensa,
        buttons:[
          {
            text:"No",
            role:"cancel",
            handler: cancelar
          },
          {
            text:"Eliminar",
            role:"confirm",
            handler:Confirmar
          }
        ]
      }
    )
    await alert.present();
    
  }

  async Mensaje(Mensaje:string,duracion:number,pos:any){
    const TOAST= await this.toast.create(
      {
        message:Mensaje,
        duration: duracion,
        position:pos
      }
    );
    TOAST.present();
  }


  constructor(private HTTP:HttpClient,private rout:Router,private toast:ToastController, private Alerta:AlertController, private locali:Location) { }
  Verificar(){
    var Usuario=localStorage.getItem("User_name")
    if (Usuario==null){
      this.rout.navigate([""])
    }
  }

  HTTP_OPTIONS={
    headers: new HttpHeaders(
      {'Content-Type': 'application/json'}
    )
  }
  private URL:string="https://crud-user.vercel.app/api/v1/";
  
  //Funciones de login
  Login(user:string,password:string):Observable<Usuario>{
  var UserLogin= {"username":user, "password":password}
  return this.HTTP.post<Usuario>(`${this.URL}login`,UserLogin,this.HTTP_OPTIONS).pipe(
    tap((login:Usuario)=> {this.Mensaje(`Bienvenido ${login.name}`,3000,"top")
  }),
    catchError(this.HandleError<Usuario>("Login"))
  )
  }

  //Funciones de CRUD
  Get_users(Pagina:number):Observable<Peticion>{
    return this.HTTP.get<Peticion>( `${this.URL}users?page=${Pagina}&limit=50`).pipe(
      tap((Data:Peticion) => {console.log("Datos recibidos")} ),
      catchError(this.HandleError<Peticion>("Obtener Usuarios"))
    )
  }

  Get_User(id:string):Observable<Usuario>{
    return this.HTTP.get<Usuario>(`${this.URL}users/${id}`).pipe(
      tap((data:Usuario) => {console.log("Datos Recibidos")}),
      catchError(this.HandleError<Usuario>("Obtener Usuario"))
    )
  }
  Update_User(User:Usuario):Observable<any>{
    return this.HTTP.put(`${this.URL}users/${User.id}`,User,this.HTTP_OPTIONS).pipe(
      tap(_=> {this.Mensaje("Usuario Actualizado",4000,"top");
        //this.locali.back();
    }),
      catchError(this.HandleError<any>("Actualizacion de usuario"))
    )
  }

  delete_user(id:string):Observable<Usuario>{
    return this.HTTP.delete<Usuario>(`${this.URL}users/${id}`,this.HTTP_OPTIONS).pipe(
      tap(_=> this.Mensaje(`Usuario ${id} borrado`,3000,"top")),
      catchError(this.HandleError<Usuario>("Eliminacion de usuario"))
    )
  }
  Post_user(User:Usuario):Observable<Usuario>{
    return this.HTTP.post<Usuario>(`${this.URL}users`,User,this.HTTP_OPTIONS).pipe(
      tap((newUser:Usuario)=> {this.Mensaje("Usuario creado",300,"top");
      //this.locali.back();
    }),
      catchError(this.HandleError<Usuario>("Creacion de usuario"))
    )
  }

  //Funciones de gestionamiento
  private HandleError<T>(operation="operation", result?:T){
    return (error:any):Observable<T> =>{
      console.log(error)
      this.Mensaje(`${operation} fallada: ${error.message}`,3000,"top")
      return of(result as T)
    }
    
  }
  /*
  https://crud-user.vercel.app/api/v1/users?page=1&limit=50
  william.chanchavac@hotmail.com
  https://crud-user.vercel.app/api/v1/users/
 */
}
