import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IEvento } from 'src/app/interfaces/i-evento';


@Injectable({
  providedIn: 'root'
})
export class EventosService {
  private URL="http://curso.i234.me:8080/eventos";
  constructor(private http:HttpClient) { }

  conseguirEventos():Observable<IEvento[]>{
    return this.http.get<{eventos:IEvento[],ok:boolean}>(this.URL)
    .pipe(map(response=>response.eventos));
  }
}
