import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree,CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogeoGuard implements CanActivate {
  constructor(private rout:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    var Logeo:boolean=localStorage.getItem("User_id")!= null;
    if (!Logeo){
      this.rout.navigate([""])
    }
    return Logeo
  }
  
}

@Injectable({
  providedIn: 'root'
})
export class Logeo implements CanActivate {
  constructor(private rout:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      var Logeo:boolean=localStorage.getItem("User_id")== null;
      if (!Logeo){
        this.rout.navigate(["/usuarios/users-section"], { queryParams:{page:1}})
      }
      return Logeo
  }
  
}
