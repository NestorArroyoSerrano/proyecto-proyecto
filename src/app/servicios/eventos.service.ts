import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, observable, Observable } from 'rxjs';
import { IEvento } from '../interfaces/i-evento';

@Injectable({
  providedIn: 'root'
})
export class EventosService {
  private URL="eventos";
  constructor(private http:HttpClient) { }

  conseguirEventos():Observable<IEvento[]>{
    return this.http.get<IEvento[]>(this.URL)
    .pipe(map(response=>response));
  }

  conseguirEvento(idEvento:number):Observable<IEvento>{
    return this.http.get<IEvento>(this.URL+"/"+idEvento)
    .pipe(map(response=>response));
  }


  addEvento(evento:IEvento):Observable<IEvento>{
    return this.http.post<{evento:IEvento,mensaje:string}>(this.URL,evento).pipe(
      map(response=>{
        console.log(response.mensaje);
        return response.evento;
      }));
  }

  /*borrarEvento(idEvento:number):Observable<number>{
    return this.http.delete<{evento:number}>(this.URL+"/"+idEvento).pipe(
      map(response=>response.evento)
    );
  }*/
  //EN VUESTRO SERVER
  borrarEvento(idEvento:number):Observable<string>{
    return this.http.delete<{mensaje:string}>(this.URL+"/"+idEvento).pipe(
      map(response=>response.mensaje)
    );
  }
}

